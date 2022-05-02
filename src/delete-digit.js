const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = String(n)
  let res = 0;

  for (let i = 0; i < String(n).length; i++) {
    let resString = string.slice(0, i) + string.slice(i + 1)
    if (Number(resString) > res) {
      res = Number(resString)
    }
}
return res;
}

module.exports = {
  deleteDigit
};
