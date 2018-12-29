import React, { PureComponent, cloneElement, createRef } from 'react'
import { createPortal } from 'react-dom'
import ButtonA11y from 'react-button-a11y'
import uniqueId from '@rpearce/simple-uniqueid'

import throttle from './throttle'

import PopoverContent from './PopoverContent'

export default class Popover extends PureComponent {
  constructor(...params) {
    super(...params)
    this.handleClickTrigger = this.handleClickTrigger.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleResize = throttle(this.handleResize.bind(this), 50)
    this.el = document.createElement('div')
    this.id = uniqueId('popover-')
    this.triggerRef = createRef()
    this.popoverRef = createRef()
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props

    if (prevProps.isOpen && !isOpen) {
      this.teardown()
    } else if (!prevProps.isOpen && isOpen) {
      this.setup()
    }
  }

  componentWillUnmount() {
    const { isOpen } = this.props

    if (isOpen) {
      this.teardown()
    }

    document.body.removeChild(this.el)
  }

  getTriggerRect() {
    const { current: tNode } = this.triggerRef

    if (tNode) {
      const rect = tNode.getBoundingClientRect()

      return {
        height: rect.height,
        left: rect.left,
        top: rect.top,
        width: rect.width
      }
    }

    return {
      height: 0,
      left: 0,
      top: 0,
      width: 0
    }
  }

  handleClickTrigger() {
    const { isOpen, onClose, onOpen } = this.props

    if (isOpen) {
      onClose()
      return
    }

    onOpen()
  }

  handleDocumentClick(e) {
    const isTrigger = this.triggerRef.current.contains(e.target)
    const isPopover = this.popoverRef.current.contains(e.target)

    if (isTrigger || isPopover) {
      return
    }

    this.props.onClose()
  }

  handleKeyDown(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.triggerRef.current.focus()
      this.props.onClose()
    }
  }

  handleResize() {
    this.forceUpdate()
  }

  setup() {
    document.addEventListener('click', this.handleDocumentClick)
    document.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('resize', this.handleResize)
  }

  teardown() {
    window.removeEventListener('resize', this.handleResize)
    document.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('click', this.handleDocumentClick)
  }

  renderTrigger() {
    const {
      isOpen,
      label,
      trigger: { props, type }
    } = this.props

    return (
      <ButtonA11y
        {...props}
        aria-controls={this.id}
        aria-expanded={isOpen}
        aria-haspopup={true}
        aria-label={label}
        aria-owns={this.id}
        onClick={this.handleClickTrigger}
        element={type}
        ref={this.triggerRef}
      />
    )
  }

  renderPopover() {
    const {
      bottom,
      content,
      isOpen,
      label,
      left,
      offset,
      right,
      top
    } = this.props

    const cProps = {
      bottom,
      id: this.id,
      isOpen,
      label,
      left,
      offset,
      ref: this.popoverRef,
      right,
      top,
      triggerRect: this.getTriggerRect()
    }

    if (content.type === PopoverContent) {
      return cloneElement(content, cProps)
    }

    return (
      <PopoverContent {...cProps}>
        {content}
      </PopoverContent>
    )
  }

  render() {
    return (
      <span>
        {this.renderTrigger()}
        {createPortal(this.renderPopover(), this.el)}
      </span>
    )
  }
}
