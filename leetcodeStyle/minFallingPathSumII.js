function minFallingPathSum(grid) {
  const n = grid.length;
  for (let i = 1; i < n; i++) {
      let min1 = Infinity, min2 = Infinity;
      for (let j = 0; j < n; j++) {
          if (grid[i - 1][j] < min1) {
              min2 = min1;
              min1 = grid[i - 1][j];
          } else if (grid[i - 1][j] < min2) {
              min2 = grid[i - 1][j];
          }
      }
      for (let j = 0; j < n; j++) {
          grid[i][j] += grid[i - 1][j] === min1 ? min2 : min1;
      }
  }
  return Math.min(...grid[n - 1]);
}
