const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */matrix) {
      let count = 0;
    let res = new Array(matrix.length);          
    for (var i = 0; i < matrix.length; i++) {
        res[i] = new Array(matrix[0].length);       
    }
   console.log(res);
   for (let i = 0; i < matrix[0].length; i++) {
     for (let j = 0; j < matrix.length; j++) {
       if (matrix[j][i] === true) matrix[j][i] = 1;
       else matrix[j][i] = 0;
     }
   }
    for (let i = 0; i < matrix.length; i++) {
     for (let j = 0; j < matrix[0].length; j++) {
       res[i][j] = 0;
      if (i !== 0 && j !== 0) {
        res[i][j] += matrix[i-1][j-1];
      }
      if (i !== 0) {
        res[i][j] += matrix[i-1][j];
      }
      if (i !== 0 && j !== matrix[0].length-1) {
        res[i][j] += matrix[i-1][j+1];
      }
      if (j !== 0) {
        res[i][j] += matrix[i][j-1];
      }
      if (j !== matrix[0].length-1) {
        res[i][j] += matrix[i][j+1];
      }
      if (j !== 0 && i !== matrix.length-1) {
        res[i][j] += matrix[i+1][j-1];
      }
       console.log(res, i, j);
      if (i !== matrix.length-1) {
        res[i][j] += matrix[i+1][j];
      }
      if (j !== matrix[0].length-1 && i !== matrix.length-1) { 
        res[i][j] += matrix[i+1][j+1];
      }
     }
   }
     return res;
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
