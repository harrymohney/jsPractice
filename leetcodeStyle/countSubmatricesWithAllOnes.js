function numSubmat(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  let count = 0;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (mat[i][j] === 1) {
              dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;
              let minWidth = dp[i][j];
              for (let k = i; k >= 0 && mat[k][j] === 1; k--) {
                  minWidth = Math.min(minWidth, dp[k][j]);
                  count += minWidth;
              }
          }
      }
  }
  return count;
}
