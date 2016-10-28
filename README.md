# _map

[![NPM version](https://img.shields.io/npm/v/lomap.svg?style=flat-square)](https://npmjs.com/package/lomap) [![NPM downloads](https://img.shields.io/npm/dm/lomap.svg?style=flat-square)](https://npmjs.com/package/lomap) [![Build Status](https://img.shields.io/circleci/project/egoist/lomap/master.svg?style=flat-square)](https://circleci.com/gh/egoist/lomap)

## Install

```bash
$ npm install --save lomap
```

## Usage

```js
const _map = require('lomap')

const obj = {foo: 123, bar: 456}

// simple case: pick some fields
_map(obj, ['foo'])
// {foo: 123}

// level up: pick with different name
_map(obj, {foo2: 'foo'})
// {foo2: 123}

// final move: pick and process with a handler function
_map(obj, ['foo'], val => val + 1)
// {foo: 123}
```

## API

### _map(source, selection, [handler])

#### source

Type: `object`<br>
Required: `true`

Source object.

#### selection

Type: `array` `object`

An array of keys to select or key-value pair to set different to target object.

#### handler

Type: `function`<br>
Default: `val => val`

Process each value with a handler function.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
