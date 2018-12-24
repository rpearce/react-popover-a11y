import React, { createRef } from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Container, { PopoverContent } from '../source/PopoverContent'

describe('PopoverContent', () => {

  describe('container', () => {

    it('renders', () => {
      const ref = createRef()
      const wrapper = mount(
        <div>
          <Container
            id="mockId"
            label="Mock label"
            ref={ref}
            triggerRect={{
              left: 300,
              height: 18,
              top: 200,
              width: 18
            }}
          >
            <div>This is some content</div>
          </Container>
        </div>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

  })

  describe('component', () => {

    it('renders', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={false}
          label="Mock label"
          triggerRect={{
            left: 0,
            height: 0,
            top: 0,
            width: 0
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 0,
            height: 0,
            top: 0,
            width: 0
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & top', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          top
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & top right', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          top
          right
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & right', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          right
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & bottom right', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          bottom
          right
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & bottom', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          bottom
          right
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & bottom left', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          bottom
          left
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & left', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          left
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & top left', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          left
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & outside top', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          top
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 10,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & outside left', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          left
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 10,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & outside right', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      window.innerWidth = 175
      const wrapper = shallow(
        <PopoverContent
          right
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 100,
            height: 25,
            top: 200,
            width: 25
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, open & outside bottom', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      window.innerHeight = 175
      const wrapper = shallow(
        <PopoverContent
          bottom
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 100,
            height: 25,
            top: 150,
            width: 25
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, custom style provided', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
          style={{ zIndex: '9999' }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, additional props added', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
          data-foo="bar"
          onClick={jest.fn()}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, triggerRect null', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={null}
          style={{ zIndex: '9999' }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    it('renders, full mount', () => {
      const forwardedRef = {
        current: {
          focus: jest.fn(),
          offsetWidth: 150,
          offsetHeight: 150
        }
      }
      const wrapper = mount(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
          isOpen={true}
          label="Mock label"
          triggerRect={{
            left: 300,
            height: 18,
            top: 200,
            width: 18
          }}
        >
          <div>This is some content</div>
        </PopoverContent>
      )
      const tree = toJson(wrapper)
      expect(tree).toMatchSnapshot()
    })

    describe('componentDidUpdate', () => {

      it('calls focus on forwardedRef', done => {
        const forwardedRef = createRef()
        const wrapper = mount(
          <PopoverContent
            forwardedRef={forwardedRef}
            id="mockId"
            isOpen={false}
            label="Mock label"
            triggerRect={{
              left: 300,
              height: 18,
              top: 200,
              width: 18
            }}
          >
            <div>This is some content</div>
          </PopoverContent>
        )
        const instance = wrapper.instance()

        const dimensionsSpy = jest.spyOn(instance, 'setDimensions')
        const focusSpy = jest.spyOn(forwardedRef.current, 'focus')

        wrapper.setProps({ isOpen: true })

        expect(dimensionsSpy).toHaveBeenCalled()

        setTimeout(() => {
          expect(focusSpy).toHaveBeenCalled()
          done()
        }, 0)
      })

    })

  })

})
