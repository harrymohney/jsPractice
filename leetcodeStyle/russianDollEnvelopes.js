function maxEnvelopes(envelopes) {
  if (envelopes.length === 0) return 0;
  envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  const dp = Array(envelopes.length).fill(1);
  for (let i = 1; i < envelopes.length; i++) {
      for (let j = 0; j < i; j++) {
          if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
  }
  return Math.max(...dp);
}
