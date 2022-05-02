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
function getSeason(date) {
    if (typeof date === 'undefined') return "Unable to determine the time of year!"
    if(!(date instanceof Date) || date.hasOwnProperty('getMonth')) throw new Error("Invalid date!")
  
    let getMonth;
    try {
      getMonth = date.getMonth();
    } catch {
      throw new Error("Invalid date!")
    }
  
    if (getMonth < 2 || getMonth > 10) {
      return 'winter'
    }
    if (getMonth < 5 && getMonth > 1) {
      return 'spring'
    }
    if (getMonth < 8 && getMonth > 4) {
      return 'summer'
    }
    if (getMonth < 11 && getMonth > 7) {
      return 'autumn'
    } 
  }

module.exports = {
  getSeason
};
