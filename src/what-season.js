const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */date) {
if (date === null) {return 'Unable to determine the time of year!'}
let month = date.getMonth();
if (!date) {throw new Error('Invalid date!')}

  if (Object.getOwnPropertyNames(date).length > 0) {throw new Error('Invalid date!')}
if (isNaN(Date.parse(date))) {
  console.log(Date.parse(date));
  return 'Invalid date!';
  }
else {
  if (date instanceof Date == false) throw new Error("Invalid date!");
  if (month === 0 || month === 1 || month === 11) {
    return 'winter';
  }
    if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  }
    if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  }
    if (month === 8 || month === 9 || month === 10) {
    return 'autumn';
  }
}
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
