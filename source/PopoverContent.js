import React, { Component } from 'react'
import withForwardedRef from 'react-with-forwarded-ref'
import {
  bool,
  func,
  node,
  number,
  object,
  oneOfType,
  shape,
  string
} from 'prop-types'

import getPCStyle from './getPCStyle'

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
      const { forwardedRef, isOpen } = this.props
      if (!prevProps.isOpen && isOpen && forwardedRef && forwardedRef.current) {
        forwardedRef.current.focus()
      }
    }, 0)
  }

  setDimensions() {
    const {
      props: {
        forwardedRef: { current }
      },
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

    const newStyle = getPCStyle({
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

PopoverContent.propTypes = {
  bottom: bool,
  children: node,
  forwardedRef: shape({ current: shape({ focus: func }) }),
  id: string.isRequired,
  isOpen: bool,
  label: string,
  left: bool,
  offset: oneOfType([number, string]),
  right: bool,
  style: object,
  top: bool,
  triggerRect: object
}

export default withForwardedRef(PopoverContent)
