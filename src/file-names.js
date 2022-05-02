const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arrOfNames) {
let result = [];
let count = 0;
for(let i = 0; i < arrOfNames.length; i++) {
  if (result.includes(arrOfNames[i])) {
    count = arrOfNames.slice(0, i + 1).filter(e => e === arrOfNames[i]).length - 1;
    
      if(count < 1) count = 1
      result.push(`${arrOfNames[i]}(${count})`)
      
  } else {
    result.push(arrOfNames[i])
  }
}
return result
}

module.exports = {
  renameFiles
};
