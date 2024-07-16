function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
          dp[i] = Math.max(dp[i], dp[i - coin] + 1);
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
// Test
console.log(coinChange([1,2,5], 11)); // Output: 3
