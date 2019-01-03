import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const Left = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Left content</div>
  const trigger = <div className="btn">Left</div>

  return (
    <PopoverA11y
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

export default withOpenToggle(Left)
