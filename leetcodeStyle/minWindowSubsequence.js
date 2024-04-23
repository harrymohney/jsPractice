function minWindow(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  let dp = Array(m + 1).fill(n);
  dp[0] = 0;
  let minLen = Infinity;
  for (let i = 1; i <= n; i++) {
      let prev = i - 1;
      for (let j = m; j >= 1; j--) {
          if (s1[i - 1] === s2[j - 1]) {
              dp[j] = dp[j - 1] === n ? n : dp[j - 1] + 1;
          }
          minLen = j === m ? Math.min(minLen, i - dp[j]) : minLen;
          prev = Math.min(prev, dp[j]);
          dp[j] = prev;
      }
  }
  return minLen === Infinity ? 0 : minLen;
}
