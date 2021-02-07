'use strict';

const assert = require('assert');

const Emitter = require('../lib/emitter');

describe('emitter', function () {
  it('emit', function () {
    const emitter = new Emitter();
    emitter.emit('Hi');
    assert.strictEqual(emitter.output, 'Hi');
  });

  it('emit with indent', function () {
    const emitter = new Emitter();
    emitter.emit('Hi', 1);
    assert.strictEqual(emitter.output, '  Hi');
  });

  it('emitln', function () {
    const emitter = new Emitter();
    emitter.emitln();
    emitter.emitln('Hi');
    assert.strictEqual(emitter.output, '\nHi\n');
  });

  it('emitln with indent', function () {
    const emitter = new Emitter();
    emitter.emitln('Hi', 1);
    assert.strictEqual(emitter.output, '  Hi\n');
  });

  it('tab should ok', function () {
    const emitter = new Emitter('\t');
    emitter.emit('Hi', 1);
    assert.strictEqual(emitter.output, '\tHi');
  });
});
