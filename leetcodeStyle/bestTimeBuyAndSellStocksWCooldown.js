function maxProfit(prices) {
  let prevProfit = 0, currProfit = 0, prevPrevProfit = 0;
  for (let i = 1; i < prices.length; i++) {
      const temp = currProfit;
      currProfit = Math.max(currProfit + prices[i] - prices[i - 1], prevProfit);
      prevProfit = Math.max(prevProfit, prevPrevProfit);
      prevPrevProfit = temp;
  }
  return Math.max(prevProfit, currProfit);
}
