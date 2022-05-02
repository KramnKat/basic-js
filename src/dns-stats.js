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
function getDNSStats(domains) {
  return domains.reduce((acc, cur) => {
    let curArr = cur.split('.').reverse();
    let substring = '';
    for (let i = 0; i < curArr.length; i++) {
      substring += `.${curArr[i]}`
      if (!acc[substring]) {
        acc = {...acc, [substring]: 1}
      } else {
        acc = {...acc, [substring]: acc[substring] + 1}
      }
    }
    return acc;
  }, {})
}

module.exports = {
  getDNSStats
};
