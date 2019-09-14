import getPCStyle from '../source/getPCStyle'

describe('getPCStyle', () => {
  describe('when NOT open', () => {
    it('returns default', () => {
      const res = getPCStyle({
        height: 100,
        isOpen: false,
        style: { padding: '1em' },
        triggerRect: {
          left: 300,
          height: 18,
          top: 200,
          width: 18
        },
        width: 200
      })
      const expected = {
        left: '0',
        opacity: '0',
        padding: '1em',
        position: 'absolute',
        top: '0',
        visibility: 'hidden',
        zIndex: '999'
      }
      expect(res).toEqual(expected)
    })
  })

  describe('when triggerRect absent', () => {
    it('returns default', () => {
      const res = getPCStyle({
        height: 100,
        isOpen: true,
        style: { padding: '1em' },
        triggerRect: null,
        width: 200
      })
      const expected = {
        left: '0',
        opacity: '1',
        padding: '1em',
        position: 'absolute',
        top: '0',
        visibility: 'visible',
        zIndex: '999'
      }
      expect(res).toEqual(expected)
    })
  })

  describe('when open', () => {
    describe('default', () => {
      it('returns bottom styles, no offset', () => {
        const res = getPCStyle({
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 0px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns bottom styles, numeric offset', () => {
        const res = getPCStyle({
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 10px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns bottom styles, rem offset', () => {
        const res = getPCStyle({
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + -0.5rem)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('bottom right', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          dirBottom: true,
          dirRight: true,
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + 0px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 0px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          dirBottom: true,
          dirRight: true,
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + 10px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 10px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          dirBottom: true,
          dirRight: true,
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + -0.5rem)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + -0.5rem)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('bottom', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 0px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 10px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + -0.5rem)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('bottom left', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          dirBottom: true,
          dirLeft: true,
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - 0px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 0px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          dirBottom: true,
          dirLeft: true,
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - 10px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + 10px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          dirBottom: true,
          dirLeft: true,
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - -0.5rem)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(218px + -0.5rem)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('left', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          dirLeft: true,
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - 0px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: '159px',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          dirLeft: true,
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - 10px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: '159px',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          dirLeft: true,
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - -0.5rem)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: '159px',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('top left', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          dirLeft: true,
          dirTop: true,
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - 0px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - 0px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          dirLeft: true,
          dirTop: true,
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - 10px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - 10px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          dirLeft: true,
          dirTop: true,
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(100px - -0.5rem)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - -0.5rem)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('top', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          dirTop: true,
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - 0px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          dirTop: true,
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - 10px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          dirTop: true,
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: '209px',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - -0.5rem)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('top right', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          dirRight: true,
          dirTop: true,
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + 0px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - 0px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          dirRight: true,
          dirTop: true,
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + 10px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - 10px)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          dirRight: true,
          dirTop: true,
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + -0.5rem)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: 'calc(100px - -0.5rem)',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })

    describe('right', () => {
      it('returns styles, no offset', () => {
        const res = getPCStyle({
          dirRight: true,
          height: 100,
          isOpen: true,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + 0px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: '159px',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, numeric offset', () => {
        const res = getPCStyle({
          dirRight: true,
          height: 100,
          isOpen: true,
          offset: 10,
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + 10px)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: '159px',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })

      it('returns styles, rem offset', () => {
        const res = getPCStyle({
          dirRight: true,
          height: 100,
          isOpen: true,
          offset: '-0.5rem',
          style: { padding: '1em' },
          triggerRect: {
            left: 300,
            height: 18,
            top: 200,
            width: 18
          },
          width: 200
        })
        const expected = {
          left: 'calc(318px + -0.5rem)',
          opacity: '1',
          padding: '1em',
          position: 'absolute',
          top: '159px',
          visibility: 'visible',
          zIndex: '999'
        }
        expect(res).toEqual(expected)
      })
    })
  })

  describe('when page offsets present', () => {
    beforeEach(() => {
      global.pageYOffset = 150
      global.pageXOffset = 75
    })

    afterEach(() => {
      global.pageYOffset = 0
      global.pageXOffset = 0
    })

    it('returns default', () => {
      const res = getPCStyle({
        height: 100,
        isOpen: true,
        style: { padding: '1em' },
        triggerRect: {
          left: 300,
          height: 18,
          top: 200,
          width: 18
        },
        width: 200
      })
      const expected = {
        left: '284px',
        opacity: '1',
        padding: '1em',
        position: 'absolute',
        top: 'calc(368px + 0px)',
        visibility: 'visible',
        zIndex: '999'
      }
      expect(res).toEqual(expected)
    })
  })

  describe('when outside top', () => {
    it('returns bottom styles', () => {
      const res = getPCStyle({
        dirTop: true,
        height: 100,
        isOpen: true,
        style: { padding: '1em' },
        triggerRect: {
          left: 300,
          height: 18,
          top: 10,
          width: 18
        },
        width: 200
      })
      const expected = {
        left: '209px',
        opacity: '1',
        padding: '1em',
        position: 'absolute',
        top: 'calc(28px + 0px)',
        visibility: 'visible',
        zIndex: '999'
      }
      expect(res).toEqual(expected)
    })
  })

  describe('when outside right', () => {
    it('returns left styles', () => {
      const res = getPCStyle({
        dirRight: true,
        height: 100,
        isOpen: true,
        style: { padding: '1em' },
        triggerRect: {
          left: 1000,
          height: 18,
          top: 200,
          width: 18
        },
        width: 200
      })
      const expected = {
        left: 'calc(800px - 0px)',
        opacity: '1',
        padding: '1em',
        position: 'absolute',
        top: '159px',
        visibility: 'visible',
        zIndex: '999'
      }
      expect(res).toEqual(expected)
    })
  })

  describe('when outside bottom', () => {
    it('returns top styles', () => {
      const res = getPCStyle({
        dirBottom: true,
        height: 100,
        isOpen: true,
        style: { padding: '1em' },
        triggerRect: {
          left: 300,
          height: 18,
          top: 700,
          width: 18
        },
        width: 200
      })
      const expected = {
        left: '209px',
        opacity: '1',
        padding: '1em',
        position: 'absolute',
        top: 'calc(600px - 0px)',
        visibility: 'visible',
        zIndex: '999'
      }
      expect(res).toEqual(expected)
    })
  })

  describe('when outside left', () => {
    it('returns right styles', () => {
      const res = getPCStyle({
        dirLeft: true,
        height: 100,
        isOpen: true,
        style: { padding: '1em' },
        triggerRect: {
          left: 5,
          height: 18,
          top: 200,
          width: 18
        },
        width: 200
      })
      const expected = {
        left: 'calc(23px + 0px)',
        opacity: '1',
        padding: '1em',
        position: 'absolute',
        top: '159px',
        visibility: 'visible',
        zIndex: '999'
      }
      expect(res).toEqual(expected)
    })
  })
})
