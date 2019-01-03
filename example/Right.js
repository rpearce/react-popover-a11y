import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const Right = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Right content</div>
  const trigger = <div className="btn">Right</div>

  return (
    <PopoverA11y
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

export default withOpenToggle(Right)
