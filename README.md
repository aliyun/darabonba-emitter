# Emitter for Codegen

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![codecov][cov-image]][cov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@darabonba/emitter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@darabonba/emitter
[travis-image]: https://img.shields.io/travis/aliyun/darabonba-emitter.svg?style=flat-square
[travis-url]: https://travis-ci.org/aliyun/darabonba-emitter
[cov-image]: https://codecov.io/gh/aliyun/darabonba-emitter/branch/master/graph/badge.svg
[cov-url]: https://codecov.io/gh/aliyun/darabonba-emitter
[david-image]: https://img.shields.io/david/aliyun/darabonba-emitter.svg?style=flat-square
[david-url]: https://david-dm.org/aliyun/darabonba-emitter
[download-image]: https://img.shields.io/npm/dm/@darabonba/emitter.svg?style=flat-square
[download-url]: https://npmjs.org/package/@darabonba/emitter

## Installation

```sh
$ npm i @darabonba/emitter -S
```

## Usage

```js
const Emitter = require('@darabonba/emitter');

const emtter = new Emitter();
emitter.emitln(`function demo() {`);
emitter.emitln(`console.log("Hello world!");`, 1);
emitter.emitln(`}`);

console.log(emitter.output);
```

The output:

```plaintext
function demo() {
  console.log("Hello world!");
}
```

## License
The Apache License 2.0
