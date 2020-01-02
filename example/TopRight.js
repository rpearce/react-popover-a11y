import React from 'react'
import PopoverA11y from '../dist/cjs'

import withOpenToggle from './withOpenToggle'

const TopRight = props => {
  const content = <div className="content">Top right content</div>
  const trigger = <div className="btn">Top right</div>

  return (
    <PopoverA11y
      {...props}
      top
      right
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(TopRight)
