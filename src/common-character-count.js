const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
  count = 0;
  let arr2 = string2.split("");
  for(let str of string1) {
    let index = arr2.findIndex(s => s === str)
    if (index >= 0) {
      count+=1
      arr2.splice(index, 1);
    }
  }
return count;
}

module.exports = {
  getCommonCharacterCount
};
