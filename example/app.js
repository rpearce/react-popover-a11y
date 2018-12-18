import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PopoverA11y from '../'

class App extends Component {
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
    const content = (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          padding: '1em 2em'
        }}
      >
        This is some content
      </div>
    )
    const trigger = (
      <div
        style={{
          backgroundColor: '#0099ff',
          borderRadius: '3px',
          display: 'inline-block',
          height: '18px',
          marginLeft: '1em',
          verticalAlign: 'middle',
          width: '18px'
        }}
      />
    )

    return (
      <div>
        (click this or interact via keyboard)
        <PopoverA11y
          content={content}
          isOpen={isOpen}
          label="Click me"
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          trigger={trigger}
        />
      </div>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
