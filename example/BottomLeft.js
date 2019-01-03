import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const BottomLeft = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Bottom left content</div>
  const trigger = <div className="btn">Bottom left</div>

  return (
    <PopoverA11y
      bottom
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

export default withOpenToggle(BottomLeft)
