const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */str, options) {
//var str = '';
var sep = '', sum = '';
//var options = { repeatTimes: 0, separator: '', addition: '', additionRepeatTimes: 0, additionSeparator: '' };
var res = '';
  if (options.additionSeparator === undefined) options.additionSeparator = '';
  sep = options.addition + options.additionSeparator;
  res = str + sep.repeat(options.additionRepeatTimes);
  res = res.substr(0, res.length - options.additionSeparator.length);
  res = res + options.separator;
  res = res.repeat(options.repeatTimes);
  res = res.substr(0, res.length - options.separator.length);
  return res;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
