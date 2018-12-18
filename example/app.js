import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PopoverA11y from '../'

class App extends Component {
  render() {
    return (
      <div>
        <PopoverA11y />
      </div>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
