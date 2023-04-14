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
  let k = 0;
  if (Array.isArray(arr)) {
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--double-next') {
    k++;
    if (i === arr.length - 1) {
      arr.pop();
    } else {
      arr[i] = arr[i+1];
      }
    }
  if (arr[i] === '--double-prev') {
    k++;
    if (k > 1) { arr.splice(i, 1); }
    else {
    if (i === 0) {
      arr.splice(i, 1);
    } else {
    arr[i] = arr[i-1];
    }
  }
  }
  if (arr[i] === '--discard-next') {
    k++;
    if (i === arr.length - 1) {
      arr.pop();
    } else { 
    arr.splice(i, 2); i--;
      }
  }
  if (arr[i] === '--discard-prev') {
    k++;
    if (i === 0) {
    arr.splice(i, 1);
    } else { 
      arr.splice(i-1, 2); i--;
      }
  }
}
return arr;
  } else throw new Error("'arr' parameter must be an instance of the Array!");
  // remove line with error and write your code here
}

module.exports = {
  transform
};
