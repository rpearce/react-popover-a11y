jest.mock('../source/uniqueId', () => () => 'mockId')

import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ButtonA11y from 'react-button-a11y'
import PopoverA11y, { PopoverContent } from '../source'

describe('Popover', () => {

  it('renders', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        content={content}
        isOpen={false}
        label="Click me"
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = mount(
      <PopoverA11y
        content={content}
        isOpen={true}
        label="Click me"
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders with PopoverContent', () => {
    const content = (
      <PopoverContent style={{ zIndex: '9999' }}>
        <div>This is some content</div>
      </PopoverContent>
    )
    const trigger = <div>Trigger</div>
    const wrapper = mount(
      <PopoverA11y
        content={content}
        isOpen={false}
        label="Click me"
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders with PopoverContent, open', () => {
    const content = (
      <PopoverContent style={{ zIndex: '9999' }}>
        <div>This is some content</div>
      </PopoverContent>
    )
    const trigger = <div>Trigger</div>
    const wrapper = mount(
      <PopoverA11y
        content={content}
        isOpen={true}
        label="Click me"
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders with actual button for trigger', () => {
    const content = (
      <PopoverContent style={{ zIndex: '9999' }}>
        <div>This is some content</div>
      </PopoverContent>
    )
    const trigger = <button>Trigger</button>
    const wrapper = shallow(
      <PopoverA11y
        content={content}
        isOpen={false}
        label="Click me"
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  describe('componentDidUpdate', () => {

    describe('when closed to open', () => {

      it('calls the setup function', () => {
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={jest.fn()}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        jest.spyOn(instance, 'setup')
        jest.spyOn(instance, 'teardown')

        wrapper.setProps({ isOpen: true })

        expect(instance.setup).toHaveBeenCalled()
        expect(instance.teardown).not.toHaveBeenCalled()
      })

    })

    describe('when open to closed', () => {

      it('calls the teardown function', () => {
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={jest.fn()}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        wrapper.setProps({ isOpen: true })

        jest.spyOn(instance, 'setup')
        jest.spyOn(instance, 'teardown')

        wrapper.setProps({ isOpen: false })

        expect(instance.setup).not.toHaveBeenCalled()
        expect(instance.teardown).toHaveBeenCalled()
      })

    })

    describe('when the same', () => {

      it('calls neither setup nor teardown', () => {
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={true}
            label="Click me"
            onClose={jest.fn()}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        jest.spyOn(instance, 'setup')
        jest.spyOn(instance, 'teardown')

        wrapper.setProps({ isOpen: true, testing: true })

        expect(instance.setup).not.toHaveBeenCalled()
        expect(instance.teardown).not.toHaveBeenCalled()
      })

    })

  })

  describe('componentWillUnmount', () => {

    describe('when closed', () => {

      it('does nothing', () => {
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={jest.fn()}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        jest.spyOn(instance, 'teardown')

        wrapper.unmount()

        expect(instance.teardown).not.toHaveBeenCalled()
      })

    })

    describe('when open', () => {

      it('calls teardown', () => {
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={jest.fn()}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        wrapper.setProps({ isOpen: true })

        jest.spyOn(instance, 'teardown')

        wrapper.unmount()

        expect(instance.teardown).toHaveBeenCalled()
      })

    })

  })

  describe('setup fn', () => {

    it('adds listeners & appends el to body', () => {
      const content = (
        <PopoverContent style={{ zIndex: '9999' }}>
          <div>This is some content</div>
        </PopoverContent>
      )
      const trigger = <button>Trigger</button>
      const wrapper = mount(
        <PopoverA11y
          content={content}
          isOpen={false}
          label="Click me"
          onClose={jest.fn()}
          onOpen={jest.fn()}
          trigger={trigger}
        />
      )
      const instance = wrapper.instance()

      const listenSpy = jest.spyOn(document, 'addEventListener')
      const appendSpy = jest.spyOn(document.body, 'appendChild')

      wrapper.setProps({ isOpen: true })

      expect(listenSpy.mock.calls).toEqual([
        [ 'click', instance.handleDocumentClick ],
        [ 'keydown', instance.handleKeyDown ]
      ])
      expect(appendSpy).toHaveBeenCalledWith(instance.el)
    })

  })

  describe('teardown fn', () => {

    it('removes listeners & removes el from body', () => {
      const content = (
        <PopoverContent style={{ zIndex: '9999' }}>
          <div>This is some content</div>
        </PopoverContent>
      )
      const trigger = <button>Trigger</button>
      const wrapper = mount(
        <PopoverA11y
          content={content}
          isOpen={false}
          label="Click me"
          onClose={jest.fn()}
          onOpen={jest.fn()}
          trigger={trigger}
        />
      )
      const instance = wrapper.instance()

      wrapper.setProps({ isOpen: true })

      const listenSpy = jest.spyOn(document, 'addEventListener')
      const removeSpy = jest.spyOn(document.body, 'removeChild')

      wrapper.setProps({ isOpen: false })

      expect(removeSpy).toHaveBeenCalledWith(instance.el)
      expect(listenSpy.mock.calls).toEqual([
        [ 'click', instance.handleDocumentClick ],
        [ 'keydown', instance.handleKeyDown ]
      ])
    })

  })

  describe('trigger click', () => {

    describe('when open', () => {

      it('calls onClose', () => {
        const onClose = jest.fn()
        const onOpen = jest.fn()
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={onClose}
            onOpen={onOpen}
            trigger={trigger}
          />
        )

        wrapper.setProps({ isOpen: true })
        wrapper.find(ButtonA11y).prop('onClick')()

        expect(onClose).toHaveBeenCalled()
        expect(onOpen).not.toHaveBeenCalled()
      })

    })

    describe('when closed', () => {

      it('calls onOpen', () => {
        const onClose = jest.fn()
        const onOpen = jest.fn()
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={onClose}
            onOpen={onOpen}
            trigger={trigger}
          />
        )

        wrapper.find(ButtonA11y).prop('onClick')()

        expect(onClose).not.toHaveBeenCalled()
        expect(onOpen).toHaveBeenCalled()
      })

    })

  })

  describe('document click', () => {

    describe('when target in trigger', () => {

      it('does nothing', () => {
        const onClose = jest.fn()
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={onClose}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        wrapper.setProps({ isOpen: true })

        instance.handleDocumentClick({
          target: instance.triggerRef.current
        })

        expect(onClose).not.toHaveBeenCalled()
      })

    })

    describe('when target in popover', () => {

      it('does nothing', () => {
        const onClose = jest.fn()
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={onClose}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        wrapper.setProps({ isOpen: true })

        instance.handleDocumentClick({
          target: instance.popoverRef.current
        })

        expect(onClose).not.toHaveBeenCalled()
      })

    })

    describe('when target something else', () => {

      it('calls onClose', () => {
        const onClose = jest.fn()
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={onClose}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )

        wrapper.setProps({ isOpen: true })

        document.dispatchEvent(new Event('click'))

        expect(onClose).toHaveBeenCalled()
      })

    })

  })

  describe('document key down', () => {

    describe('when closed', () => {

      it('does nothing', () => {
        const onClose = jest.fn()
        const content = (
          <PopoverContent style={{ zIndex: '9999' }}>
            <div>This is some content</div>
          </PopoverContent>
        )
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            label="Click me"
            onClose={onClose}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()
        const focusSpy = jest.spyOn(instance.triggerRef.current, 'focus')

        document.dispatchEvent(new KeyboardEvent('keydown', {
          bubbles: true,
          key: 'Escape'
        }))

        expect(focusSpy).not.toHaveBeenCalled()
        expect(onClose).not.toHaveBeenCalled()
      })

    })

    describe('when open', () => {

      describe('when e.key is Escape', () => {

        it('focuses on trigger and calls onClose', () => {
          const onClose = jest.fn()
          const content = (
            <PopoverContent style={{ zIndex: '9999' }}>
              <div>This is some content</div>
            </PopoverContent>
          )
          const trigger = <button>Trigger</button>
          const wrapper = mount(
            <PopoverA11y
              content={content}
              isOpen={false}
              label="Click me"
              onClose={onClose}
              onOpen={jest.fn()}
              trigger={trigger}
            />
          )
          const instance = wrapper.instance()

          wrapper.setProps({ isOpen: true })

          const focusSpy = jest.spyOn(instance.triggerRef.current, 'focus')

          document.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true,
            key: 'Escape'
          }))

          expect(focusSpy).toHaveBeenCalled()
          expect(onClose).toHaveBeenCalled()
        })

      })

      describe('when e.keyCode is 27', () => {

        it('focuses on trigger and calls onClose', () => {
          const onClose = jest.fn()
          const content = (
            <PopoverContent style={{ zIndex: '9999' }}>
              <div>This is some content</div>
            </PopoverContent>
          )
          const trigger = <button>Trigger</button>
          const wrapper = mount(
            <PopoverA11y
              content={content}
              isOpen={false}
              label="Click me"
              onClose={onClose}
              onOpen={jest.fn()}
              trigger={trigger}
            />
          )
          const instance = wrapper.instance()

          wrapper.setProps({ isOpen: true })

          const focusSpy = jest.spyOn(instance.triggerRef.current, 'focus')

          document.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true,
            keyCode: 27
          }))

          expect(focusSpy).toHaveBeenCalled()
          expect(onClose).toHaveBeenCalled()
        })

      })

      describe('when e.key is Spacebar', () => {

        it('does nothing', () => {
          const onClose = jest.fn()
          const content = (
            <PopoverContent style={{ zIndex: '9999' }}>
              <div>This is some content</div>
            </PopoverContent>
          )
          const trigger = <button>Trigger</button>
          const wrapper = mount(
            <PopoverA11y
              content={content}
              isOpen={false}
              label="Click me"
              onClose={onClose}
              onOpen={jest.fn()}
              trigger={trigger}
            />
          )
          const instance = wrapper.instance()

          wrapper.setProps({ isOpen: true })

          const focusSpy = jest.spyOn(instance.triggerRef.current, 'focus')

          document.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true,
            key: 'Spacebar'
          }))

          expect(focusSpy).not.toHaveBeenCalled()
          expect(onClose).not.toHaveBeenCalled()
        })

      })

      describe('when e.keyCode is 13', () => {

        it('does nothing', () => {
          const onClose = jest.fn()
          const content = (
            <PopoverContent style={{ zIndex: '9999' }}>
              <div>This is some content</div>
            </PopoverContent>
          )
          const trigger = <button>Trigger</button>
          const wrapper = mount(
            <PopoverA11y
              content={content}
              isOpen={false}
              label="Click me"
              onClose={onClose}
              onOpen={jest.fn()}
              trigger={trigger}
            />
          )
          const instance = wrapper.instance()

          wrapper.setProps({ isOpen: true })

          const focusSpy = jest.spyOn(instance.triggerRef.current, 'focus')

          document.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true,
            keyCode: 13
          }))

          expect(focusSpy).not.toHaveBeenCalled()
          expect(onClose).not.toHaveBeenCalled()
        })

      })

    })

  })

})
