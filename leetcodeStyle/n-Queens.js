function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  backtrack(result, board, 0);
  return result;
}

function backtrack(result, board, row) {
  if (row === board.length) {
      result.push(board.map(row => row.join('')));
      return;
  }
  for (let col = 0; col < board.length; col++) {
      if (isValid(board, row, col)) {
          board[row][col] = 'Q';
          backtrack(result, board, row + 1);
          board[row][col] = '.';
      }
  }
}

function isValid(board, row, col) {
  for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === 'Q') return false;
  }
  return true;
}
