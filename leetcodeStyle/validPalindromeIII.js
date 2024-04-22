function isValidPalindrome(s, k) {
  const n = s.length;
  const dp = Array(n + 1).fill(null).map(() => Array(n + 1).fill(0));
  for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
          const j = i + len - 1;
          if (s[i] === s[j]) {
              dp[i][j] = dp[i + 1][j - 1];
          } else {
              dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1]);
          }
      }
  }
  return dp[0][n - 1] <= k;
}
