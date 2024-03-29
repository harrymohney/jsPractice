function exist(board, word) {
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(board, i, j, word, 0)) {
              return true;
          }
      }
  }
  return false;
}

function dfs(board, i, j, word, index) {
  if (index === word.length) return true;
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) return false;
  const temp = board[i][j];
  board[i][j] = '#';
  const found = dfs(board, i + 1, j, word, index + 1) || dfs(board, i - 1, j, word, index + 1) ||
                dfs(board, i, j + 1, word, index + 1) || dfs(board, i, j - 1, word, index + 1);
  board[i][j] = temp;
  return found;
}
