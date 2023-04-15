const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  var mas = [],
  var res = '',
  getLength() {
    return this.mas.length;
    // remove line with error and write your code here
  },
  addLink(/* value */value) {
    this.mas.push(value);
    return this;
   // if (value !== null) mas = mas + value;
  //  else mas = mas + ' ';
    // remove line with error and write your code here
  },
  removeLink(/* position */position) {
        if (typeof position != 'number' || position <= 0 || position > this.mas.length) {
      this.mas = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.mas.splice(position-1, 1);
    return this;
  //    for (let i = 0; i < mas.length; i++) {
  //  if (mas[i] === position) {mas.splice(i, 1); h++;}
  //      if (h === 0) throw new Error("You can\'t remove incorrect link!");}
    // remove line with error and write your code here
  },
  reverseChain() {
        this.mas = this.mas.reverse();
    return this;
 //   mas.reverse();
    // remove line with error and write your code here
  },
  finishChain() {
    for (let i = 0; i < this.mas.length; i++) {
      if (i == 0) res = '( ' + this.mas[0] + ' )';
      else res += '~~( ' + this.mas[i] + ' )';
    }
    this.mas = [];
    return res;
  //    for (let j = 0; j < mas.length - 1; j++) {
  //  res = '( ' + mas[j] + ' )~~';
  //}
  //res = res + '( ' + mas[mas.length] + ' )';
 // return res;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
