const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */arr) {
var arr1;
var count = 1;
function sum(arr1) {
  console.log(arr1, arr1.length);
  for (let j = 0; j < arr1.length; j++) {
  if (Array.isArray(arr1[j])) {
    if (arr1[j].length > 1) {
    count++;
  sum(arr1[j]);
  } else {
      count++; }
  }
}
}
for (let i = 0; i < arr.length; i++) { 
  if (Array.isArray(arr[i])) {
    count++;
    if (Array.isArray(arr[i])) {
    count++;
    sum(arr[i]);
    } else {
      count++; }
  }
}
   return count; 
    
    
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
