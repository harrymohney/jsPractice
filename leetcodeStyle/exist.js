function exist(board, word) {
  const dfs = (row, col, index) => {
      if (
          row < 0 ||
          col < 0 ||
          row >= board.length ||
          col >= board[0].length ||
          board[row][col] !== word[index]
      ) {
          return false;
      }
      if (index === word.length - 1) {
          return true;
      }
      const temp = board[row][col];
      board[row][col] = '#';
      const found =
          dfs(row + 1, col, index + 1) ||
          dfs(row - 1, col, index + 1) ||
          dfs(row, col + 1, index + 1) ||
          dfs(row, col - 1, index + 1);
      board[row][col] = temp;
      return found;
  };
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(i, j, 0)) {
              return true;
          }
      }
  }
  return false;
}
// Test
console.log(exist([
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
], "ABCCED")); // Output: true
