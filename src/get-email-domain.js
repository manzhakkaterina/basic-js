const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(/* email */email) {
   let mas = [];
   mas = email.split('@').slice(-1);
  return mas[0];
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
