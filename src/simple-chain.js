const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length;
    // remove line with error and write your code here
  },
  addLink(/* value */value) {
    this.mas.push(value === undefined ? "( )" : `( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(/* position */position) {
    const position1 = Number(position);
    if (Number.isNaN(position1) || !Number.isInteger(position1)) {
      this.mas = [];
      throw new Error("You can't remove incorrect link!");
    }
    const filt = this.mas.filter((x, i) => i != position1 - 1);
    if (filt.length === this.mas.length) {
      this.mas = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.mas = filt;
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.mas.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    const res = this.mas.join("~~");
    this.mas = [];
    return res;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
