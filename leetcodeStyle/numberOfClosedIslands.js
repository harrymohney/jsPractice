function closedIsland(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let count = 0;

  const dfs = (r, c) => {
      if (r < 0 || r >= m || c < 0 || c >= n) return false;
      if (grid[r][c] !== 0) return true;
      grid[r][c] = -1; // mark as visited
      let isClosed = true;
      for (const [dr, dc] of directions) {
          isClosed = isClosed && dfs(r + dr, c + dc);
      }
      return isClosed;
  };

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 0 && dfs(i, j)) {
              count++;
          }
      }
  }

  return count;
}
