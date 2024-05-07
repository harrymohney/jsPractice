function longestPalindromeSubseq(s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let len = 1; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
          const j = i + len - 1;
          if (i === j) {
              dp[i][j] = 1;
          } else if (s[i] === s[j]) {
              dp[i][j] = dp[i + 1][j - 1] + 2;
          } else {
              dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
          }
      }
  }

  let maxLen = 0;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (i === j) continue;
          maxLen = Math.max(maxLen, dp[i][j]);
      }
  }

  return maxLen;
}
