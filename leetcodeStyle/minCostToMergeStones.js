function mergeStones(stones, k) {
  const n = stones.length;
  if ((n - 1) % (k - 1) !== 0) return -1;
  const prefixSum = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
      prefixSum[i + 1] = prefixSum[i] + stones[i];
  }
  const memo = {};
  const dp = (i, j, piles) => {
      if (j - i + 1 === piles) return i === j ? 0 : Infinity;
      const key = `${i}-${j}-${piles}`;
      if (memo.hasOwnProperty(key)) return memo[key];
      let minCost = Infinity;
      for (let mid = i; mid < j; mid += k - 1) {
          minCost = Math.min(minCost, dp(i, mid, 1) + dp(mid + 1, j, piles - 1));
      }
      if ((j - i) % (k - 1) === 0) {
          minCost += prefixSum[j + 1] - prefixSum[i];
      }
      memo[key] = minCost;
      return minCost;
  };
  return dp(0, n - 1, 1);
}
