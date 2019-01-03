import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const Bottom = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Bottom content</div>
  const trigger = <div className="btn">Bottom</div>

  return (
    <PopoverA11y
      bottom
      content={content}
      isOpen={isOpen}
      offset={10}
      onClose={onClose}
      onOpen={onOpen}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(Bottom)
