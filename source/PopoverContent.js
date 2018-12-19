import React, { PureComponent, forwardRef } from 'react'

export class PopoverContent extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.forwardedRef.current.focus()
    }, 0)
  }

  // @TODO do this way better
  getStyle() {
    const { style, triggerRect: t } = this.props
    const left = t ? t.width * 0.75 + t.left : 0
    const top = t ? t.height * 0.75 + t.top : 0
    const position = 'fixed'

    return Object.assign({},
      { zIndex: '999' },
      style,
      { left, position, top }
    )
  }

  render() {
    const { children, forwardedRef, id, label } = this.props
    const style = this.getStyle()

    return (
      <div
        aria-label={label}
        id={id}
        ref={forwardedRef}
        role="dialog"
        style={style}
        tabIndex="-1"
      >
        {children}
      </div>
    )
  }
}

const WrappedComponent = forwardRef((props, ref) =>
  <PopoverContent {...props} forwardedRef={ref} />
)

export default WrappedComponent
