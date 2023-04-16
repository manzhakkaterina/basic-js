const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */domains) {
  var object = {};
  var mas = [];
  var k = 0, prom = '', slovo = '';
  for (let i = 0; i < domains.length; i++) {
    mas[k] = domains[i].split('.');
    prom = mas[k];
    for (let j = prom.length-1; j >= 0; j--) {
      slovo += '.' + prom[j];
      if (object.hasOwnProperty(slovo)) {
        object[`${slovo}`] = object[`${slovo}`] + 1;
      } else object[`${slovo}`] = 1;
    }
    k++;
    slovo = '';
  }
  return object;
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
