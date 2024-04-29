function findBall(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const move = (col) => {
      let row = 0;
      while (row < m) {
          if (grid[row][col] === 'R' && (col === n - 1 || grid[row][col + 1] === 'L')) {
              return -1;
          }
          if (grid[row][col] === 'L' && (col === 0 || grid[row][col - 1] === 'R')) {
              return -1;
          }
          col += grid[row][col] === 'R' ? 1 : -1;
          row++;
      }
      return col;
  };
  const result = [];
  for (let col = 0; col < n; col++) {
      result.push(move(col));
  }
  return result;
}
