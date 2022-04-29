const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrOfTeam) {
  if (!Array.isArray(arrOfTeam)) {
    return false
  }

  let newArr = [];
  for (let i = 0; i < arrOfTeam.length; i++) {
    if (typeof arrOfTeam[i] === 'string' && arrOfTeam[i] !== " ") {
      newArr.push(arrOfTeam[i].trim().toUpperCase())
    }
  }
  let sortArr = newArr.sort();
  console.log(sortArr)
  let res = ''
  for (let j = 0; j < sortArr.length; j++) {
      res += sortArr[j].slice(0, 1);
  }
  console.log(res)
  return res;

}

module.exports = {
  createDreamTeam
};
