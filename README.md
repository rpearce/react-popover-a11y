# react-popover-a11y
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![npm version](https://img.shields.io/npm/v/react-popover-a11y.svg)](https://www.npmjs.com/package/react-popover-a11y) [![npm downloads](https://img.shields.io/npm/dt/react-popover-a11y.svg)](https://www.npmjs.com/package/react-popover-a11y) [![Build Status](https://travis-ci.org/rpearce/react-popover-a11y.svg?branch=master)](https://travis-ci.org/rpearce/react-popover-a11y) [![Coverage Status](https://coveralls.io/repos/github/rpearce/react-popover-a11y/badge.svg?branch=master)](https://coveralls.io/github/rpearce/react-popover-a11y?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/8e4debef4b9f0e8acd6e/maintainability)](https://codeclimate.com/github/rpearce/react-popover-a11y/maintainability)

## Links
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [All Contributors](#contributors)
* [Authors](./AUTHORS)
* [Changelog](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)

## Installation
```js
$ npm i react-popover-a11y
```
or
```js
$ yarn add react-popover-a11y
```

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
        offset="-0.5rem"
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

# API

| Prop | Type | Required | Default  | Details |
| ---  | --- | ---  | --- | --- |
| `bottom` | bool | no | none | Have popover appear at the bottom |
| `content` | node | yes | none | This is the popover content element. Can be a normal React node or import `PopoverContent` itself to override its `style` |
| `isOpen` | bool | yes | false | As a controlled component, you must pass `isOpen` to tell the component what to do |
| `label` | string | no | none | Provide a label to be used as `aria-label` when no appropriate `trigger` text is provided |
| `left` | bool | no | none | Have popover appear at the left |
| `offset` | number / CSS unit | no | `0px` | Amount in pixels (or CSS unit value, like `-0.5rem`) for popover to be offset from trigger |
| `onClose` | function | yes | `Function.prototype` | Callback that is triggered when element should close |
| `onOpen` | function | yes | `Function.prototype` | Callback that is triggered when element should open |
| `right` | bool | no | none | Have popover appear at the right |
| `top` | bool | no | none | Have popover appear at the top |
| `trigger` | node | yes | none | This is the popover trigger element |

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://robertwpearce.com"><img src="https://avatars2.githubusercontent.com/u/592876?v=4" width="100px;" alt=""/><br /><sub><b>Robert Pearce</b></sub></a><br /><a href="https://github.com/rpearce/react-popover-a11y/commits?author=rpearce" title="Code">💻</a> <a href="https://github.com/rpearce/react-popover-a11y/commits?author=rpearce" title="Documentation">📖</a> <a href="#example-rpearce" title="Examples">💡</a> <a href="#ideas-rpearce" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/rpearce/react-popover-a11y/commits?author=rpearce" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/mallo106"><img src="https://avatars.githubusercontent.com/u/36346097?v=4" width="100px;" alt=""/><br /><sub><b>Luke Mallory</b></sub></a><br /><a href="https://github.com/rpearce/react-popover-a11y/issues?q=author%3Amallo106" title="Bug reports">🐛</a> <a href="https://github.com/rpearce/react-popover-a11y/commits?author=mallo106" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
