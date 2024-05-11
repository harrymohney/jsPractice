function maxProfit(k, prices) {
  const n = prices.length;
  if (k >= n / 2) return maxProfitUnlimited(prices);

  const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

  for (let i = 1; i <= k; i++) {
      let maxDiff = -prices[0];
      for (let j = 1; j < n; j++) {
          dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
          maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
      }
  }

  return dp[k][n - 1];
}

function maxProfitUnlimited(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
          maxProfit += prices[i] - prices[i - 1];
      }
  }
  return maxProfit;
}
