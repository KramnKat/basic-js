const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(string) {
  let count = 1;
  let res = ''
  let prevLetter = string[0] || ""
    for(let i = 1; i < string.length; i++) {
      if (string[i] === prevLetter) {
      count += 1
        } else {
            if (count < 2) {
            res += `${prevLetter}`
            } else {
            res += `${count}${prevLetter}`
            }
      count = 1;
      prevLetter = string[i]
        }
      } 
      if (count < 2) {
      res += `${prevLetter}`
      } else {
      res += `${count}${prevLetter}`
      count = 1
      }
  return res;
}

module.exports = {
  encodeLine
};
