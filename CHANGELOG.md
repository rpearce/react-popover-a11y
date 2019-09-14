# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2019-09-13

### Added
* added `prop-types` as dependency

### Changed
* build output is now in `dist/` folder
* building with `rollup.js`
* outputting commonjs & ESM files now instead of just commonjs

## [0.2.1] - 2019-01-03

### Changed
* minor code quality changes

## [0.2.0] - 2019-01-03

### Added
* support for either a `Number` or any valid CSS unit value that can be used
  with `calc` for the `offset` property (#6)

## [0.1.2] - 2018-12-29

### Changed
* swapped `uniqueId` implementation with `@rpearce/simple-uniqueid`

## [0.1.1] - 2018-12-29

### Changed
* bumped `react-button-a11y` to `v2.0.0`.
* a `Popover.test.js` for `componentWillUnmount` was accidentally commented out

## [0.1.0] - 2018-12-24

### Added
* Added missing functionality (a lot). See API docs for all you can now do
  * `bottom`
  * `left`
  * `offset`
  * `right`
  * `top`
* Can compose options; e.g., `bottom` and `left` or `top` and `right`

### Fixed
* responds based on `window` boundaries (if it's to be opened to the left, but
  there's no room, it'll open to the right)

## [0.0.1] - 2018-12-19

### Added
* Added initial alpha functionality
