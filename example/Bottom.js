import React from 'react'
import PopoverA11y from '../dist/cjs'

import withOpenToggle from './withOpenToggle'

const Bottom = props => {
  const content = <div className="content">Bottom content</div>
  const trigger = <div className="btn">Bottom</div>

  return (
    <PopoverA11y
      {...props}
      bottom
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(Bottom)
