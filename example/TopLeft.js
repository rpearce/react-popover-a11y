import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const TopLeft = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Top left content</div>
  const trigger = <div className="btn">Top left</div>

  return (
    <PopoverA11y
      top
      left
      content={content}
      isOpen={isOpen}
      offset={10}
      onClose={onClose}
      onOpen={onOpen}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(TopLeft)
