function exist(board, word) {
  function dfs(i, j, k) {
      if (k === word.length) return true;
      if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k]) return false;
      const temp = board[i][j];
      board[i][j] = '#';
      const result = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
      board[i][j] = temp;
      return result;
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(i, j, 0)) return true;
      }
  }
  return false;
}
// Test
const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const word = "ABCCED";
console.log(exist(board, word)); // Output: true
