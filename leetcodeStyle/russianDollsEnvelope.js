function maxEnvelopes(envelopes) {
  envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  const dp = new Array(envelopes.length).fill(1);
  let maxCount = 1;
  for (let i = 1; i < envelopes.length; i++) {
      for (let j = 0; j < i; j++) {
          if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
      maxCount = Math.max(maxCount, dp[i]);
  }
  return maxCount;
}
