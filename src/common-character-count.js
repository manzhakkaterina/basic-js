const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */s1, s2) {
  
  var res = '';
  var count = s2.length;
  var num = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.search(s1[i]) !== -1) {
      num = s2.indexOf(s1[i]);
      s2 = s2.substr(0, num) + s2.substr(num+1, s2.length);
    }
  }
  return count-s2.length;
  
  
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
