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
  const str = String(n);
  return [...str].reduce((maxNum, _, index) => {
    const num = Number(str.slice(0, index) + str.slice(index + 1));
    return Math.max(maxNum, num);
  }, 0);
}

module.exports = {
  deleteDigit
};
