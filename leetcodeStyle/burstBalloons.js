function maxCoins(nums) {
  const n = nums.length;
  const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));
  const extendedNums = [1, ...nums, 1];

  for (let len = 1; len <= n; len++) {
      for (let i = 1; i <= n - len + 1; i++) {
          const j = i + len - 1;
          for (let k = i; k <= j; k++) {
              dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + extendedNums[i - 1] * extendedNums[k] * extendedNums[j + 1] + dp[k + 1][j]);
          }
      }
  }

  return dp[1][n];
}
