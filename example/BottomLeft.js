import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const BottomLeft = props => {
  const content = <div className="content">Bottom left content</div>
  const trigger = <div className="btn">Bottom left</div>

  return (
    <PopoverA11y
      {...props}
      bottom
      left
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(BottomLeft)
