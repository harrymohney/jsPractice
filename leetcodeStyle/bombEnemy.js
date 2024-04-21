function maxKilledEnemies(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let maxCount = 0;
  let rowHits = 0;
  const colHits = Array(n).fill(0);
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (j === 0 || grid[i][j - 1] === 'W') {
              rowHits = 0;
              for (let k = j; k < n && grid[i][k] !== 'W'; k++) {
                  rowHits += grid[i][k] === 'E' ? 1 : 0;
              }
          }
          if (i === 0 || grid[i - 1][j] === 'W') {
              colHits[j] = 0;
              for (let k = i; k < m && grid[k][j] !== 'W'; k++) {
                  colHits[j] += grid[k][j] === 'E' ? 1 : 0;
              }
          }
          if (grid[i][j] === '0') {
              maxCount = Math.max(maxCount, rowHits + colHits[j]);
          }
      }
  }
  return maxCount;
}
