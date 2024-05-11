function totalNQueens(n) {
  let count = 0;
  backtrack([], 0);
  return count;

  function backtrack(board, row) {
      if (row === n) {
          count++;
          return;
      }

      for (let col = 0; col < n; col++) {
          if (isValid(board, row, col)) {
              board.push(col);
              backtrack(board, row + 1);
              board.pop();
          }
      }
  }

  function isValid(board, row, col) {
      for (let r = 0; r < row; r++) {
          const c = board[r];
          if (c === col || r + c === row + col || r - c === row - col) {
              return false;
          }
      }
      return true;
  }
}
