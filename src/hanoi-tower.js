const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(/* disksNumber, turnsSpeed */disksNumber, turnsSpeed) {
let res1 = 0, res2 = 0;
res1 = Math.pow(2, disksNumber) - 1;
res2 = Math.floor((res1 * 3600) / turnsSpeed);
return '{ turns: ', res1, ', seconds: ', res2, ' }';
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
