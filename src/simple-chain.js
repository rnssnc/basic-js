const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chains: [],

  checkValue(value) {
    typeof value !== 'undefined' ? value : (value = ' ');
    return value === null ? '( null )' : `( ${value} )`;
  },
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(this.checkValue(value));
    return this;
  },
  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position <= this.chains.length &&
      position > 0
    )
      this.chains.splice(position - 1, 1);
    else {
      this.chains = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let result = this.chains.join('~~');
    this.chains = [];
    return result;
  },
};

console.log(
  [
    '( 3rd )',
    '( 2nd )',
    '( function() {} )',
    '( DEF )',
    '( null )',
    '( [object Object] )',
  ].join('~~')
);
module.exports = chainMaker;
