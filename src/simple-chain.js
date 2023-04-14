const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let mas = [];
const chainMaker = {
  getLength() {
    return mas.length;
    // remove line with error and write your code here
  },
  addLink(/* value */value) {
    mas = mas + value;
    // remove line with error and write your code here
  },
  removeLink(/* position */position) {
      for (let i = 1; i < mas.length; i++) {
    if (mas[i] === position) mas.splice(i, 1);
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
  console.log(res);
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
