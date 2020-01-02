import React from 'react'
import PopoverA11y from '../dist/cjs'

import withOpenToggle from './withOpenToggle'

const Left = props => {
  const content = <div className="content">Left content</div>
  const trigger = <div className="btn">Left</div>

  return (
    <PopoverA11y
      {...props}
      left
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(Left)
