function cherryPickup(grid) {
  const n = grid.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(-1));

  const dfs = (r1, c1, r2) => {
      const c2 = r1 + c1 - r2;
      if (r1 === n || c1 === n || r2 === n || c2 === n || grid[r1][c1] === -1 || grid[r2][c2] === -1) return -Infinity;
      if (r1 === n - 1 && c1 === n - 1) return grid[r1][c1];

      if (dp[r1][c1][r2] !== undefined) return dp[r1][c1][r2];

      let cherries = grid[r1][c1];
      if (r1 !== r2) cherries += grid[r2][c2];

      let maxCherries = Math.max(
          dfs(r1 + 1, c1, r2 + 1),
          dfs(r1 + 1, c1, r2),
          dfs(r1, c1 + 1, r2 + 1),
          dfs(r1, c1 + 1, r2)
      );

      maxCherries += cherries;
      dp[r1][c1][r2] = maxCherries;
      return maxCherries;
  };

  return Math.max(0, dfs(0, 0, 0));
}
