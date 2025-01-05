const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      if (cell) return 1;
      let neighborMines = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          const neighborRow = rowIndex + x;
          const neighborCol = cellIndex + y;
          if (neighborRow >= 0 && neighborRow < matrix.length && neighborCol >= 0 && neighborCol < row.length && matrix[neighborRow] && matrix[neighborRow][neighborCol]) {
            neighborMines++;
          }
        }
      }
      return neighborMines;
    })
  );
}

module.exports = {
  minesweeper
};
