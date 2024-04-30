function getMaximumGold(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let maxGold = 0;

  const dfs = (r, c, currentGold) => {
      if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) return;
      const goldHere = grid[r][c];
      grid[r][c] = 0; // mark as visited
      maxGold = Math.max(maxGold, currentGold + goldHere);
      for (const [dr, dc] of directions) {
          dfs(r + dr, c + dc, currentGold + goldHere);
      }
      grid[r][c] = goldHere; // backtrack
  };

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] !== 0) {
              dfs(i, j, 0);
          }
      }
  }

  return maxGold;
}
