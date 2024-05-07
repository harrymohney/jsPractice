function numWays(words, target) {
  const mod = 1e9 + 7;
  const n = words[0].length;
  const m = target.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  const counts = Array.from({ length: n }, () => new Array(26).fill(0));

  for (const word of words) {
      for (let i = 0; i < n; i++) {
          counts[i][word.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      }
  }

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
      for (let j = 0; j <= m; j++) {
          dp[i][j] = dp[i - 1][j];
          if (j > 0) {
              const charIndex = target.charCodeAt(j - 1) - 'a'.charCodeAt(0);
              dp[i][j] = (dp[i][j] + dp[i - 1][j - 1] * counts[i - 1][charIndex] % mod) % mod;
          }
      }
  }

  return dp[n][m];
}
