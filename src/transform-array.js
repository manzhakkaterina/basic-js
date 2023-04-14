const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */arr) {
  if (Array.isArray(arr)) {
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--double-next') arr[i] = arr[i+1];
  if (arr[i] === '--double-prev') arr[i] = arr[i-1];
  if (arr[i] === '--discard-next') arr.splice(i, 2);
  if (arr[i] === '--discard-prev') arr.splice(i-1, 2);
}
return arr;
  } else return ''arr' parameter must be an instance of the Array!';
  // remove line with error and write your code here
}

module.exports = {
  transform
};
