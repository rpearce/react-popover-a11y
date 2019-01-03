import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const TopRight = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Top right content</div>
  const trigger = <div className="btn">Top right</div>

  return (
    <PopoverA11y
      top
      right
      content={content}
      isOpen={isOpen}
      offset={10}
      onClose={onClose}
      onOpen={onOpen}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(TopRight)
