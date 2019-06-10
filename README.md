[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-random.svg)](https://npmjs.org/package/@dizmo/functions-random)
[![Build Status](https://travis-ci.org/dizmo/functions-random.svg?branch=master)](https://travis-ci.org/dizmo/functions-random)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-random/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-random?branch=master)

# @dizmo/functions-random

Attaches to the `String` type a `random` function which returns a random string for the provided length and range, where the length needs to be in `[0..8]` and the range in `[2..36]`. By default the length is `0`, and hence any empty string is the result.

**NOTE**: The implementation of this functions is *not* cryptographically secure, and hence it should *only* be used in non-security related use cases! Internally it is based on the `Math.random` function.

## Usage

### Install

```sh
npm install @dizmo/functions-random --save
```

### Require

```javascript
let lib = require('@dizmo/functions-random');
```

### Examples

```javascript
String.random(8);
```

```javascript
us7c55xs
```

```javascript
String.random(8, 2);
```

```javascript
11001000
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

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2019 [dizmo AG](http://dizmo.com/), Switzerland
