const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(/* n */n) {
  var str = n.toString(), num = 0;
   while (str.length !== 1) {
     num = 0;
   for (let i = 0; i < str.length; i++) {
     num += Number(str[i]);
   }
   str = num.toString();
   }
   return Number(str);
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
