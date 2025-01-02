const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let totalSum = 0;
  const width = matrix[0].length;
  matrix.flat().forEach((num, index) => {
    const colIndex = index % width;
    const rowIndex = Math.floor(index / width);
    if (rowIndex === 0 || matrix[rowIndex - 1][colIndex] !== 0) {
      totalSum += num;
    }
  });
  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};
