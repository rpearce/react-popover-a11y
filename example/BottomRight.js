import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const BottomRight = props => {
  const content = <div className="content">Bottom right content</div>
  const trigger = <div className="btn">Bottom right</div>

  return (
    <PopoverA11y
      {...props}
      bottom
      right
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(BottomRight)
