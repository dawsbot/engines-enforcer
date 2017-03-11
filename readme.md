# engines-enforcer
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] ![][node-version-image]

> Enforce node engines specified in package.json

### Because this:

`Invalid node version. This package requires ">=7.0". You are using "v4.7.0"`

### Is 💯 times nicer than this:

```sh
const a = 1;
^^^^^
SyntaxError: Use of const in strict mode.
    at Module._compile (module.js:439:25)
    at Object.Module._extensions..js (module.js:474:10)
    ...more cryptic random internals of Node.js
```

<br/>

## Install

```
yarn add engines-enforcer
```

## Usage

```js
// if your current node version does not match "engines" in "package.json"
require('engines-enforcer')('./package.json');
//=> 'Invalid node version. This package requires ">=7.0". You are using "v4.7.0"'
```

```js
// if your current node version matches, it continues silently
require('engines-enforcer')('./package.json');
// the rest of your code...
```

## Why?

**Nobody** likes seeing errors like:

```sh
const a = 1;
^^^^^
SyntaxError: Use of const in strict mode.
    at Module._compile (module.js:439:25)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:945:3
```

Especially when you're running a module for the first time. Use `engines-enforcer` at the very top of your entry file in order to **throw pleasant and informative errors instead**!

*Caution* - This is intended to be used within cli's and not modules which will be composed as sub-dependencies. It would be redundant to enforce node versions in more than one place, so consider this a good practice for cli's only.

## API

### enginesEnforcer(packagePath)

#### Arguments

| Name    | Description                     |   Type   |  Default  |
| ------- | ------------------------------- | -------- |  -------  |
| packagePath  | Path to `package.json`     | `string` |   None    |

#### Returns

Type: Nothing on success, exits for you on failure (with status code `1`)

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

[npm-image]: https://badge.fury.io/js/engines-enforcer.svg
[npm-url]: https://npmjs.org/package/engines-enforcer
[travis-image]: https://travis-ci.org/dawsbot/engines-enforcer.svg?branch=master
[travis-url]: https://travis-ci.org/dawsbot/engines-enforcer
[node-version-image]: https://img.shields.io/badge/Node-%3E%3Dv0.10.0-ff69b4.svg
