const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */countC) {
  let k = 0;
for (let i = 0; i < countC.length; i++) {
  for (let j = 0; j < countC.length; j++) {
    console.log(countC[i][j]);
    if (countC[i][j] === '^^') k++;
  }
}
return k;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
