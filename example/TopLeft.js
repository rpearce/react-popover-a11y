import React, { Component } from 'react'
import PopoverA11y from '../'

export default class TopLeft extends Component {
  constructor(...params) {
    super(...params)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = { isOpen: false }
  }

  handleClose() {
    this.setState({ isOpen: false })
  }

  handleOpen() {
    this.setState({ isOpen: true })
  }

  render() {
    const { isOpen } = this.state
    const content = <div className="content">Top left content</div>
    const trigger = <div className="btn">Top left</div>

    return (
      <PopoverA11y
        top
        left
        content={content}
        isOpen={isOpen}
        offset={10}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        trigger={trigger}
      />
    )
  }
}
