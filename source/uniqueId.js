const random4 = () =>
  Math.random().toString(16).slice(-4)

const uniqueId = (prefix='') =>
  prefix.concat([
    random4(),
    random4(),
    random4(),
    random4(),
    random4(),
    random4(),
    random4(),
    random4()
  ].join(''))

export default uniqueId
