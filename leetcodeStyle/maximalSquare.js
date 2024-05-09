function maximalSquare(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  let maxSquareLen = 0;

  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (matrix[i - 1][j - 1] === '1') {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
              maxSquareLen = Math.max(maxSquareLen, dp[i][j]);
          }
      }
  }

  return maxSquareLen * maxSquareLen;
}
