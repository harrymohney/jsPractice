function minCost(houses, cost, m, n, target) {
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(null).map(() => Array(target + 1).fill(Infinity)));
  for (let j = 1; j <= n; j++) {
      dp[0][j][0] = 0;
  }
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          for (let k = 1; k <= target; k++) {
              if (houses[i - 1] !== 0 && houses[i - 1] !== j) continue;
              const sameColor = (houses[i - 1] === j) ? 0 : cost[i - 1][j - 1];
              dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j][k] + sameColor);
              for (let p = 1; p <= n; p++) {
                  if (p !== j) {
                      dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][p][k - 1] + cost[i - 1][j - 1]);
                  }
              }
          }
      }
  }
  let minCost = Infinity;
  for (let j = 1; j <= n; j++) {
      minCost = Math.min(minCost, dp[m][j][target]);
  }
  return minCost === Infinity ? -1 : minCost;
}
