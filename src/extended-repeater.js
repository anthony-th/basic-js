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
function repeater(str, options) {
  const addition = options.addition !== undefined ? String(options.addition) : '';
  function repeatString(strToRepeat, repeatCount, separator) {
    let result = '';
    for (let i = 0; i < repeatCount; i++) {
      result += strToRepeat;
      if (i < repeatCount - 1) {
        result += separator;
      }
    }
    return result;
  }
  const additionRepeat = repeatString(addition, options.additionRepeatTimes || 1, options.additionSeparator || '|');
  const result = repeatString(String(str) + additionRepeat, options.repeatTimes || 1, options.separator || '+');
  return result;
}

module.exports = {
  repeater
};
