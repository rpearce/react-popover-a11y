import React, { PureComponent } from 'react'
import withForwardedRef from 'react-with-forwarded-ref'

// @TODO do this way better
const getStyle = ({ style, triggerRect: t }) => {
  const left = t ? t.width * 0.75 + t.left : 0
  const top = t ? t.height * 0.75 + t.top : 0
  const position = 'fixed'

  return Object.assign({},
    { zIndex: '999' },
    style,
    { left, position, top }
  )
}

export class PopoverContent extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.forwardedRef.current.focus()
    }, 0)
  }

  render() {
    const {
      children,
      forwardedRef,
      id,
      label,
      style,
      triggerRect,
      ...rest
    } = this.props
    const newStyle = getStyle({ style, triggerRect })

    return (
      <div
        {...rest}
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
