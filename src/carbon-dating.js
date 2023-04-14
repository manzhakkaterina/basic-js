const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */sampleActivity) {
const k1 = 0.693;
let time = 0;
const isNumeric = sampleActivity => !!Number(sampleActivity);
if (isNumeric('NaN')) return false;
if (sampleActivity < MODERN_ACTIVITY && sampleActivity > 0) {
time = Math.ceil(Math.log((MODERN_ACTIVITY/sampleActivity))/(k1/HALF_LIFE_PERIOD));
return time;
} else return false;

  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
