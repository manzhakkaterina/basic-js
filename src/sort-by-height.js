const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */arr) {
  let newArr = [], position = [], k = 0;

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] !== -1) {
       newArr[k] = arr[i];
       position[k] = i;
       k++;
     }
   }

 newArr.sort(function(a, b) {
   return a - b;
});
   
    for (let i = 0; i < newArr.length; i++) {
      arr[position[i]] = newArr[i];
    }
   return arr;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
