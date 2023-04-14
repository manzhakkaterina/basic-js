const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
var mas = [], res = '';
var h = 0;
const chainMaker = {
  getLength() {
    return mas.length;
    // remove line with error and write your code here
  },
  addLink(/* value */value) {
    if (value !== null) mas = mas + value;
    else mas = mas + ' ';
    // remove line with error and write your code here
  },
  removeLink(/* position */position) {
      for (let i = 0; i < mas.length; i++) {
    if (mas[i] === position) {mas.splice(i, 1); h++;}
        if (h === 0) throw new Error("You can\'t remove incorrect link!");
  }
    // remove line with error and write your code here
  },
  reverseChain() {
    mas.reverse();
    // remove line with error and write your code here
  },
  finishChain() {
      for (let j = 0; j < mas.length - 1; j++) {
    res = '( ' + mas[j] + ' )~~';
  }
  res = res + '( ' + mas[mas.length] + ' )';
  return res;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
