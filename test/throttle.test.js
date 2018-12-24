import throttle from '../source/throttle'

describe('throttle', () => {

  it('throttles', done => {
    const testIt = jest.fn()
    const throttled = throttle(testIt, 50)

    throttled()
    throttled()

    expect(testIt).toHaveBeenCalledTimes(1)

    setTimeout(() => {
      throttled()
      expect(testIt).toHaveBeenCalledTimes(2)
      done()
    }, 50)
  })

})
