import React, { Component } from 'react'

const withOpenToggle = WrappedComponent => {
  class OpenToggle extends Component {
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
      return (
        <WrappedComponent
          {...this.props}
          isOpen={this.state.isOpen}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
        />
      )
    }
  }
  const name = WrappedComponent.displayName || WrappedComponent.name
  OpenToggle.displayName = `OpenToggle(${name})`
  return OpenToggle
}

export default withOpenToggle
