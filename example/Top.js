import React from 'react'
import PopoverA11y from '../'

import withOpenToggle from './withOpenToggle'

const Top = ({
  onClose,
  onOpen,
  isOpen
}) => {
  const content = <div className="content">Top content</div>
  const trigger = <div className="btn">Top</div>

  return (
    <PopoverA11y
      top
      content={content}
      isOpen={isOpen}
      offset={10}
      onClose={onClose}
      onOpen={onOpen}
      trigger={trigger}
    />
  )
}

export default withOpenToggle(Top)
