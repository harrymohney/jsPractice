function longestIncreasingPath(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = Array(m).fill(null).map(() => Array(n).fill(0));
  let maxLength = 0;
  const dfs = (i, j) => {
      if (memo[i][j] !== 0) return memo[i][j];
      let maxPath = 1;
      for (const [dx, dy] of dirs) {
          const x = i + dx;
          const y = j + dy;
          if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
              maxPath = Math.max(maxPath, 1 + dfs(x, y));
          }
      }
      memo[i][j] = maxPath;
      return maxPath;
  };
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          maxLength = Math.max(maxLength, dfs(i, j));
      }
  }
  return maxLength;
}
