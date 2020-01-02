import React from 'react'
import PopoverA11y from '../dist/cjs'

import withOpenToggle from './withOpenToggle'

const TopLeft = props => {
  const content = <div className="content">Top left content</div>
  const trigger = <div className="btn">Top left</div>

  return (
    <PopoverA11y
      {...props}
      top
      left
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(TopLeft)
