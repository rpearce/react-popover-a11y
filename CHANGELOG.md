# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
