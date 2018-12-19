import uniqueId from '../source/uniqueId'

const regex = /^[a-z0-9]{32}$/
const prefixRegex = /^prefix-[a-z0-9]{32}$/

describe('uniqueId', () => {

  it('returns ids', () => {
    const id1 = uniqueId()
    const id2 = uniqueId()
    const id3 = uniqueId()

    expect(id1).toMatch(regex)
    expect(id2).toMatch(regex)
    expect(id3).toMatch(regex)
  })

  it('returns ids with a prefix', () => {
    const id1 = uniqueId('prefix-')
    const id2 = uniqueId('prefix-')
    const id3 = uniqueId('prefix-')

    expect(id1).toMatch(prefixRegex)
    expect(id2).toMatch(prefixRegex)
    expect(id3).toMatch(prefixRegex)
  })

  it('returns ids are all not equal', () => {
    const id1 = uniqueId()
    const id2 = uniqueId()
    const id3 = uniqueId()

    expect(id1).not.toEqual(id2)
    expect(id2).not.toEqual(id3)
    expect(id3).not.toEqual(id1)
  })

})
