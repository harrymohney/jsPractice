function isValidSudoku(board) {
  const rows = Array(9).fill(null).map(() => new Set());
  const columns = Array(9).fill(null).map(() => new Set());
  const boxes = Array(9).fill(null).map(() => new Set());
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const num = board[i][j];
          if (num === '.') continue;
          const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) return false;
          rows[i].add(num);
          columns[j].add(num);
          boxes[boxIndex].add(num);
      }
  }
  return true;
}
