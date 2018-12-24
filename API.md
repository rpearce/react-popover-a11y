# API Documentation

| Prop | Type | Required | Default  | Details |
| ---  | --- | ---  | --- | --- |
| `bottom` | bool | no | none | Have popover appear at the bottom |
| `content` | node | yes | none | This is the popover content element. Can be a normal React node or import `PopoverContent` itself to override its `style` |
| `isOpen` | bool | yes | false | As a controlled component, you must pass `isOpen` to tell the component what to do |
| `label` | string | no | none | Provide a label to be used as `aria-label` when no appropriate `trigger` text is provided |
| `left` | bool | no | none | Have popover appear at the left |
| `offset` | number | no | none | Amount in pixels for popover to be offset from trigger |
| `onClose` | function | yes | `Function.prototype` | Callback that is triggered when element should close |
| `onOpen` | function | yes | `Function.prototype` | Callback that is triggered when element should open |
| `right` | bool | no | none | Have popover appear at the right |
| `top` | bool | no | none | Have popover appear at the top |
| `trigger` | node | yes | none | This is the popover trigger element |

## Usage

```js
import PopoverA11y from 'react-popover-a11y'

export default class App extends Component {
  constructor(...params) {
    super(...params)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = { isOpen: false }
  }

  handleClose() {
    this.setState({ isOpen: false })
  }

  handleOpen() {
    this.setState({ isOpen: true })
  }

  render() {
    const { isOpen } = this.state
    const content = <div className="content">Popover content</div>
    const trigger = <div className="btn">Click me</div>

    return (
      <PopoverA11y
        bottom
        right
        content={content}
        isOpen={isOpen}
        offset={10}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        trigger={trigger}
      />
    )
  }
}
```

### Adding `PopoverContent` style

```js
import PopoverA11y, { PopoverContent } from 'react-popover-a11y'

export default class App extends Component {
  constructor(...params) {
    super(...params)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = { isOpen: false }
  }

  handleClose() {
    this.setState({ isOpen: false })
  }

  handleOpen() {
    this.setState({ isOpen: true })
  }

  render() {
    const { isOpen } = this.state
    const content = <div className="content">Popover content</div>
    const trigger = (
      <PopoverContent style={{ zIndex: '9999' }}>
        <div className="btn">Click me</div>
      </PopoverContent>
    )

    return (
      <PopoverA11y
        bottom
        right
        content={content}
        isOpen={isOpen}
        offset={10}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        trigger={trigger}
      />
    )
  }
}
```

### Can compose tangential directions
You can pass both `bottom` and `left` or `top` and `right`, for example, or
simply one of those.

### On `window` boundaries
If you specify `top` and `right`, but the popover would open _outside_ the
`window` to the top and right, this component will adjust it to be _inside_ the
`window` – in this case, `bottom` and `left` – so that it will remain visible.
