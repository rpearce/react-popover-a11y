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
      const focus = jest.fn()
      const forwardedRef = { current: { focus } }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
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

    it('renders, triggerRect has values', () => {
      const focus = jest.fn()
      const forwardedRef = { current: { focus } }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
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

    it('renders, custom style provided', () => {
      const focus = jest.fn()
      const forwardedRef = { current: { focus } }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
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
      const focus = jest.fn()
      const forwardedRef = { current: { focus } }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
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
      const focus = jest.fn()
      const forwardedRef = { current: { focus } }
      const wrapper = shallow(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
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
      const focus = jest.fn()
      const forwardedRef = { current: { focus } }
      const wrapper = mount(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
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

    it('calls focus on forwardedRef on mount', done => {
      const forwardedRef = createRef()
      const wrapper = mount(
        <PopoverContent
          forwardedRef={forwardedRef}
          id="mockId"
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

      const focusSpy = jest.spyOn(forwardedRef.current, 'focus')

      wrapper.instance().componentDidMount()

      setTimeout(() => {
        expect(focusSpy).toHaveBeenCalled()
        done()
      }, 0)
    })

  })

})
