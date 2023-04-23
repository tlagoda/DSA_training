/*
    Given an m x n matrix board where each cell is a battleship 'X' or empty '.', 
    return the number of the battleships on board.

    Battleships can only be placed horizontally or vertically on board. 
    In other words, they can only be made of the shape 1 x k (1 row, k columns) or 
    k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or 
    vertical cell separates between two battleships (i.e., there are no adjacent battleships).

    Example:
    Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
    Output: 2
*/

const countBattleships = (board: string[][]) => {
  let result = 0;
  let rows = board.length;
  let columns = board[0].length;

  // we look for the heads of the ships
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // we check the element above and the box on the left
      const left = j - 1 >= 0 ? board[i][j - 1] : ".";
      const top = i - 1 >= 0 ? board[i - 1][j] : ".";

      // when we find the head of the ship, we increment
      if (board[i][j] === "X" && left !== "X" && top !== "X") {
        result++;
      }
    }
  }

  return result;
};

// TESTING

const board1 = [
  ["X", ".", ".", "X"],
  [".", ".", ".", "X"],
  [".", ".", ".", "X"],
];

const board2 = [
  ["X", ".", ".", "X"],
  [".", "X", ".", "X"],
  [".", "X", ".", "X"],
];

const board3 = [
  ["X", ".", "X", "."],
  [".", "X", ".", "X"],
  ["X", ".", "X", "."],
];

console.log("Board 1:");
console.log(board1);
console.log(`Number of ships: ${countBattleships(board1)}`);

console.log("Board 2:");
console.log(board2);
console.log(`Number of ships: ${countBattleships(board2)}`);

console.log("Board 3:");
console.log(board3);
console.log(`Number of ships: ${countBattleships(board3)}`);
