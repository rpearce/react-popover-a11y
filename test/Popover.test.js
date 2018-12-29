jest.mock('@rpearce/simple-uniqueid', () => () => 'mockId')

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
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, top', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        top
        content={content}
        isOpen={false}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, top right', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        top
        right
        content={content}
        isOpen={false}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, right', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        right
        content={content}
        isOpen={false}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, bottom right', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        bottom
        right
        content={content}
        isOpen={false}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, bottom', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        bottom
        right
        content={content}
        isOpen={false}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, bottom left', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        bottom
        left
        content={content}
        isOpen={false}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, left', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        left
        content={content}
        isOpen={false}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, top left', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        top
        left
        content={content}
        isOpen={false}
        offset={10}
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
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open with label', () => {
    const content = <div>This is some content</div>
    const trigger = <div />
    const wrapper = mount(
      <PopoverA11y
        content={content}
        isOpen={true}
        offset={10}
        label="Click me"
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & top', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        top
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & top right', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        top
        right
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & right', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        right
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & bottom right', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        bottom
        right
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & bottom', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        bottom
        right
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & bottom left', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        bottom
        left
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & left', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        left
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open & top left', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = shallow(
      <PopoverA11y
        top
        left
        content={content}
        isOpen={true}
        offset={10}
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, open with NO offset', () => {
    const content = <div>This is some content</div>
    const trigger = <div>Trigger</div>
    const wrapper = mount(
      <PopoverA11y
        content={content}
        isOpen={true}
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
        onClose={jest.fn()}
        onOpen={jest.fn()}
        trigger={trigger}
      />
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  describe('componentDidMount', () => {

    it('appends element to the DOM', () => {
      const appendSpy = jest.spyOn(document.body, 'appendChild')
      const content = <div>This is some content</div>
      const trigger = <button>Trigger</button>
      const wrapper = mount(
        <PopoverA11y
          content={content}
          isOpen={false}
          onClose={jest.fn()}
          onOpen={jest.fn()}
          trigger={trigger}
        />
      )
      const instance = wrapper.instance()
      expect(appendSpy).toHaveBeenCalledWith(instance.el)
    })

  })

  describe('componentWillUnmount', () => {

    describe('when open', () => {

      it('calls teardown & removes element from the DOM', () => {
        const removeSpy = jest.spyOn(document.body, 'removeChild')
        const content = <div>This is some content</div>
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={true}
            onClose={jest.fn()}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        jest.spyOn(instance, 'teardown')

        wrapper.unmount()

        expect(instance.teardown).toHaveBeenCalled()
        expect(removeSpy).toHaveBeenCalledWith(instance.el)
      })

    })

    describe('when NOT open', () => {

      it('only removes the element from the DOM', () => {
        const removeSpy = jest.spyOn(document.body, 'removeChild')
        const content = <div>This is some content</div>
        const trigger = <button>Trigger</button>
        const wrapper = mount(
          <PopoverA11y
            content={content}
            isOpen={false}
            onClose={jest.fn()}
            onOpen={jest.fn()}
            trigger={trigger}
          />
        )
        const instance = wrapper.instance()

        jest.spyOn(instance, 'teardown')

        wrapper.unmount()

        expect(instance.teardown).not.toHaveBeenCalled()
        expect(removeSpy).toHaveBeenCalledWith(instance.el)
      })

    })

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
          onClose={jest.fn()}
          onOpen={jest.fn()}
          trigger={trigger}
        />
      )
      const instance = wrapper.instance()

      const docListenSpy = jest.spyOn(document, 'addEventListener')
      const winListenSpy = jest.spyOn(window, 'addEventListener')

      wrapper.setProps({ isOpen: true })

      expect(docListenSpy.mock.calls).toEqual([
        [ 'click', instance.handleDocumentClick ],
        [ 'keydown', instance.handleKeyDown ]
      ])
      expect(winListenSpy.mock.calls[3]).toEqual(
        [ 'resize', instance.handleResize ]
      )
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
          onClose={jest.fn()}
          onOpen={jest.fn()}
          trigger={trigger}
        />
      )
      const instance = wrapper.instance()

      wrapper.setProps({ isOpen: true })

      const docListenSpy = jest.spyOn(document, 'removeEventListener')
      const winListenSpy = jest.spyOn(window, 'removeEventListener')

      wrapper.setProps({ isOpen: false })

      expect(winListenSpy.mock.calls[2]).toEqual([
        'resize', instance.handleResize
      ])
      expect(docListenSpy.mock.calls).toEqual([
        [ 'keydown', instance.handleKeyDown ],
        [ 'click', instance.handleDocumentClick ]
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

  describe('handleResize', () => {

    it('calls forceUpdate on resize', () => {
      const onClose = jest.fn()
      const content = <div>This is some content</div>
      const trigger = <button>Trigger</button>
      const wrapper = mount(
        <PopoverA11y
          content={content}
          isOpen={false}
          onClose={onClose}
          onOpen={jest.fn()}
          trigger={trigger}
        />
      )
      const instance = wrapper.instance()
      const updateSpy = jest.spyOn(instance, 'forceUpdate')

      instance.handleResize()

      expect(updateSpy).toHaveBeenCalled()
    })

  })

})
