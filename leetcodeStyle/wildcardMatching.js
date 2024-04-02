function isMatch(s, p) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*') {
          for (let i = 1; i <= s.length; i++) {
              dp[i] = dp[i] || dp[i - 1];
          }
      } else {
          for (let i = s.length; i >= 1; i--) {
              dp[i] = dp[i - 1] && (p[j - 1] === '?' || s[i - 1] === p[j - 1]);
          }
          dp[0] = false;
      }
  }
  return dp[s.length];
}
