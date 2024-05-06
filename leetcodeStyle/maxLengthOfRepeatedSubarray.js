function findLength(A, B) {
  const m = A.length;
  const n = B.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let maxLength = 0;

  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (A[i - 1] === B[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
              maxLength = Math.max(maxLength, dp[i][j]);
          }
      }
  }

  return maxLength;
}
