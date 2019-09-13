import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import Bottom from './Bottom'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
import Left from './Left'
import Right from './Right'
import Top from './Top'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="example top left">
          <BottomRight />
        </div>
        <div className="example top middleX">
          <Bottom />
        </div>
        <div className="example top right">
          <BottomLeft />
        </div>
        <div className="example right middleY">
          <Left />
        </div>
        <div className="example bottom right">
          <TopLeft />
        </div>
        <div className="example bottom middleX">
          <Top />
        </div>
        <div className="example bottom left">
          <TopRight />
        </div>
        <div className="example left middleY">
          <Right />
        </div>
      </Fragment>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
