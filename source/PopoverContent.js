import React, { Component } from 'react'
import withForwardedRef from 'react-with-forwarded-ref'

const getStyle = ({
  dirBottom,
  dirLeft,
  dirRight,
  dirTop,
  height,
  isOpen,
  offset: _offset,
  style,
  triggerRect,
  width
}) => {
  const zIndex = '999'
  const initial = Object.assign({},
    { zIndex },
    style,
    {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden'
    }
  )

  if (!isOpen || !triggerRect) {
    return initial
  }

  const offset = _offset || 0

  const realTop  = window.pageYOffset + triggerRect.top
  const realLeft = window.pageXOffset + triggerRect.left

  const toTop    = { top: realTop - height - offset }
  const toRight  = { left: realLeft + triggerRect.width + offset }
  const toBottom = { top: realTop + triggerRect.height + offset }
  const toLeft   = { left: realLeft - width - offset }

  const toMiddleX = { left: realLeft + (triggerRect.width / 2) - (width / 2) }
  const toMiddleY = { top: realTop + (triggerRect.height / 2) - (height / 2) }

  const isOutsideTop    = triggerRect.top - height <= 0
  const isOutsideRight  = triggerRect.left + width >= window.innerWidth
  const isOutsideBottom = triggerRect.top + triggerRect.height + height >= window.innerHeight
  const isOutsideLeft   = triggerRect.left - width <= 0

  return Object.assign({}, initial,
    toBottom,  // default
    toMiddleX, // default
    dirTop && toTop,
    dirRight && toRight,
    dirBottom && toBottom,
    dirLeft && toLeft,
    ((dirTop || dirBottom) && !dirLeft && !dirRight) && toMiddleX,
    ((dirRight || dirLeft) && !dirTop && !dirBottom) && toMiddleY,
    isOutsideTop && toBottom,
    isOutsideRight && toLeft,
    isOutsideBottom && toTop,
    isOutsideLeft && toRight
  )
}

export class PopoverContent extends Component {
  constructor(...params) {
    super(...params)
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount() {
    this.setDimensions()
  }

  componentDidUpdate(prevProps) {
    this.setDimensions()

    setTimeout(() => {
      const { forwardedRef, isOpen  } = this.props
      if (!prevProps.isOpen && isOpen && forwardedRef && forwardedRef.current) {
        forwardedRef.current.focus()
      }
    }, 0)
  }

  setDimensions() {
    const {
      props: { forwardedRef: { current } },
      state: { height, width }
    } = this

    if (height !== current.offsetHeight || width !== current.offsetWidth) {
      this.setState({
        height: current.offsetHeight,
        width: current.offsetWidth
      })
    }
  }

  render() {
    const {
      props: {
        bottom: dirBottom,
        children,
        forwardedRef,
        id,
        isOpen,
        label,
        left: dirLeft,
        offset,
        right: dirRight,
        style,
        top: dirTop,
        triggerRect,
        ...rest
      },
      state: { height, width }
    } = this

    const newStyle = getStyle({
      dirBottom,
      dirLeft,
      dirRight,
      dirTop,
      height,
      isOpen,
      offset,
      style,
      triggerRect,
      width
    })

    return (
      <div
        {...rest}
        aria-hidden={!isOpen}
        aria-label={label}
        id={id}
        ref={forwardedRef}
        role="dialog"
        style={newStyle}
        tabIndex="-1"
      >
        {children}
      </div>
    )
  }
}

export default withForwardedRef(PopoverContent)
