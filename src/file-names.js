const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */names) {
  let res = names;
  let count = 0, file = '';
  for (let i = 0; i < res.length; i++) {
    file = res[i];
    for (let j = 0; j < i; j++) {
      if (res[j] === res[i]) {
        count++;
        res[i] = file + count;
      }
    }
    count = 0;
  }
  return res;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
