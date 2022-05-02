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
function repeater(string, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
string = String(string)
addition = String(addition)
 let substring = new Array(additionRepeatTimes).fill(addition).join(additionSeparator)
 let str = new Array(repeatTimes).fill(string +  substring).join(separator)
 return str;
}

module.exports = {
  repeater
};
