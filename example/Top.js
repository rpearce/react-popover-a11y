import React from 'react'
import PopoverA11y from '../dist/cjs'

import withOpenToggle from './withOpenToggle'

const Top = props => {
  const content = <div className="content">Top content</div>
  const trigger = <div className="btn">Top</div>

  return (
    <PopoverA11y
      {...props}
      top
      content={content}
      offset={10}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(Top)
