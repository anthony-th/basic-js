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
function encodeLine(str) {
  let count = 1;
  let result = '';
  str.split('').forEach((char, index) => {
    if (char === str[index + 1]) {
      count++;
    } else {
      if (count > 1) {
        result += count;
      }
      result += char;
      count = 1;
    }
  });
  return result;
}

module.exports = {
  encodeLine
};
