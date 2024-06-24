function tribonacci(n) {
  const dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
}
// Test
console.log(tribonacci(4)); // Output: 4
console.log(tribonacci(25)); // Output: 1389537
