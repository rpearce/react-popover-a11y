import React, { PureComponent, createRef } from 'react'

export default class PopoverContent extends PureComponent {
  constructor(...params) {
    super(...params)
    this.ref = createRef()
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.ref.current) {
        this.ref.current.focus()
      }
    }, 0)
  }

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
    const { children, id, label } = this.props
    const style = this.getStyle()

    return (
      <div
        aria-label={label}
        id={id}
        ref={this.ref}
        role="dialog"
        style={style}
        tabIndex="-1"
      >
        {children}
      </div>
    )
  }
}
