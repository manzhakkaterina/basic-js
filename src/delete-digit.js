const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */n) {
    var max = 0;
    var stroka = String(n);
    var numer;
    for (let i = 0; i < stroka.length; i++) {
      numer = Number(stroka.substring(0, i).concat(stroka.substring(i+1)));
      if (numer > max) { max = numer; }
    }
    return max;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
