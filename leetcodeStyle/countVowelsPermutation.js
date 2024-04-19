function countVowelPermutation(n) {
  const mod = 10 ** 9 + 7;
  const dp = Array(n + 1).fill(null).map(() => Array(5).fill(0));
  for (let i = 0; i < 5; i++) {
      dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
      dp[i][0] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]) % mod;
      dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod;
      dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % mod;
      dp[i][3] = dp[i - 1][2];
      dp[i][4] = (dp[i - 1][2] + dp[i - 1][3]) % mod;
  }
  let count = 0;
  for (let i = 0; i < 5; i++) {
      count = (count + dp[n][i]) % mod;
  }
  return count;
}
