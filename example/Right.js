import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const Right = props => {
  const content = <div className="content">Right content</div>
  const trigger = <div className="btn">Right</div>

  return (
    <PopoverA11y
      {...props}
      right
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(Right)
