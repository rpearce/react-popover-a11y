import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const BottomRight = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Bottom right content</div>
  const trigger = <div className="btn">Bottom right</div>

  return (
    <PopoverA11y
      bottom
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

export default withOpenToggle(BottomRight)
