'use strict';

class Emitter {
  constructor(tab = '  ') {
    this.tab = tab;
    this.output = '';
  }

  emit(input, indent = 0) {
    this.output += this.tab.repeat(indent) + input;
  }

  emitln(input = '', indent = 0) {
    this.output += this.tab.repeat(indent) + input + '\n';
  }
}

module.exports = Emitter;
