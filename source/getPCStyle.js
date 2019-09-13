const parseOffset = offset => {
  if (!offset || parseFloat(offset) === 0) {
    return '0px'
  }

  return typeof offset === 'number' ? `${offset}px` : offset
}

const getInitial = ({ isOpen, style }) =>
  Object.assign({}, { zIndex: '999' }, style, {
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: isOpen ? '1' : '0',
    visibility: isOpen ? 'visible' : 'hidden'
  })

const getPCStyle = ({
  dirBottom,
  dirLeft,
  dirRight,
  dirTop,
  height,
  isOpen,
  offset: _offset,
  style,
  triggerRect,
  width
}) => {
  const initial = getInitial({ isOpen, style })

  if (!isOpen || !triggerRect) {
    return initial
  }

  const offset = parseOffset(_offset)

  const realTop = window.pageYOffset + triggerRect.top
  const realLeft = window.pageXOffset + triggerRect.left

  const toTop = { top: `calc(${realTop - height}px - ${offset})` }
  const toRight = {
    left: `calc(${realLeft + triggerRect.width}px + ${offset})`
  }
  const toBottom = {
    top: `calc(${realTop + triggerRect.height}px + ${offset})`
  }
  const toLeft = { left: `calc(${realLeft - width}px - ${offset})` }

  const toMiddleX = {
    left: `${realLeft + triggerRect.width / 2 - width / 2}px`
  }
  const toMiddleY = {
    top: `${realTop + triggerRect.height / 2 - height / 2}px`
  }

  const isOutsideTop = triggerRect.top - height <= 0
  const isOutsideRight = triggerRect.left + width >= window.innerWidth
  const isOutsideBottom =
    triggerRect.top + triggerRect.height + height >= window.innerHeight
  const isOutsideLeft = triggerRect.left - width <= 0

  return Object.assign(
    {},
    initial,
    toBottom, // default
    toMiddleX, // default
    dirTop && toTop,
    dirRight && toRight,
    dirBottom && toBottom,
    dirLeft && toLeft,
    (dirTop || dirBottom) && !dirLeft && !dirRight && toMiddleX,
    (dirRight || dirLeft) && !dirTop && !dirBottom && toMiddleY,
    isOutsideTop && toBottom,
    isOutsideRight && toLeft,
    isOutsideBottom && toTop,
    isOutsideLeft && toRight
  )
}

export default getPCStyle
