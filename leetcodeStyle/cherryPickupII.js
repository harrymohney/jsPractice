function cherryPickup(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(m).fill(null).map(() => Array(n).fill(null).map(() => Array(n).fill(-Infinity)));
  const dfs = (row, col1, col2) => {
      if (row === m) return 0;
      if (col1 < 0 || col1 >= n || col2 < 0 || col2 >= n) return -Infinity;
      if (dp[row][col1][col2] !== -Infinity) return dp[row][col1][col2];
      let cherries = 0;
      cherries += grid[row][col1];
      if (col1 !== col2) {
          cherries += grid[row][col2];
      }
      let maxCherries = -Infinity;
      for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
              maxCherries = Math.max(maxCherries, dfs(row + 1, col1 + i, col2 + j));
          }
      }
      dp[row][col1][col2] = cherries + maxCherries;
      return dp[row][col1][col2];
  };
  return Math.max(0, dfs(0, 0, n - 1));
}
