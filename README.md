[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-random.svg)](https://npmjs.org/package/@dizmo/functions-random)
[![Build Status](https://travis-ci.org/dizmo/functions-random.svg?branch=master)](https://travis-ci.org/dizmo/functions-random)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-random/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-random?branch=master)

# @dizmo/functions-random

Attaches to the `String` type a `random` function which returns a random string for the provided number of bytes and encoding with `ascii`, `base64`, `hex`, `latin1` and `ucs2` as possible values. By default the number of bytes is `16` and the default encoding is `hex`.

## Usage

### Install

```sh
npm install @dizmo/functions-random --save
```

### Require

```javascript
const { random } = require('@dizmo/functions-random');
```

### Examples

```javascript
random(16);
```

```javascript
2fa6651ce3680dd13899156f9550ec61
```

```javascript
random(16, 'hex');
```

```javascript
d00e24ae8348004bca2f9c07ba6ae43b
```

```javascript
random(16, 'ascii');
```

```javascript
lZq\x01\x07j\x17:OnlG9u[\x13
```

```javascript
random(16, 'base64');
```

```javascript
QbqxfgF3JBiCktUQl+p9lQ==
```

```javascript
random(16, 'latin1');
```

```javascript
Ø¼\x8D\x9F*>\nØ\x83BÃÑë{\x15Ð
```

```javascript
random(16, 'ucs2');
```

```javascript
☔戠䰍⧗灺밄䯗晡
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Documentation

```sh
npm run docs
```

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2020 [dizmo AG](http://dizmo.com/), Switzerland
