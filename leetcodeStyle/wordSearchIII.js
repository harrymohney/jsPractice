function exist(board, word) {
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const dfs = (row, col, index) => {
      if (index === word.length) return true;
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== word[index]) return false;
      const temp = board[row][col];
      board[row][col] = '#';
      for (const [dx, dy] of directions) {
          if (dfs(row + dx, col + dy, index + 1)) return true;
      }
      board[row][col] = temp;
      return false;
  };
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(i, j, 0)) return true;
      }
  }
  return false;
}
