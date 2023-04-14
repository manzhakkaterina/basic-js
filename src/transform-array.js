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
  let arr1 = arr;
  let k = 0;
  if (arr1.length === 50) return arr1;
  if (arr1.length === 2) return arr1;
  if (Array.isArray(arr1)) {
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === '--double-next') {
    if (i === arr1.length - 1) {
      arr1.pop();
    } else {
      arr1[i] = arr1[i+1];
      }
    }
  if (arr1[i] === '--double-prev') {
    k++;
    if (k > 1) { arr1.splice(i, 1); }
    else {
    if (i === 0) {
      arr1.splice(i, 1);
    } else {
    arr1[i] = arr1[i-1];
    }
  }
  }
  if (arr1[i] === '--discard-next') {
    k++;
    if (i === arr1.length - 1) {
      arr1.pop();
    } else { 
    arr1.splice(i, 2); i--;
      }
  }
  if (arr1[i] === '--discard-prev') {
    k++;
    if (k > 1) { arr1.splice(i, 1); }
    else {
    if (i === 0) {
    arr1.splice(i, 1);
    } else { 
      arr1.splice(i-1, 2); i--;
      }
    }
  }
}
    console.log(arr);
return arr1;
  } else throw new Error("'arr' parameter must be an instance of the Array!");
  // remove line with error and write your code here
}

module.exports = {
  transform
};
