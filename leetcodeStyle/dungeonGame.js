function calculateMinimumHP(dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(Infinity));
  dp[m - 1][n] = dp[m][n - 1] = 1;

  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          const minHealth = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
          dp[i][j] = Math.max(1, minHealth);
      }
  }

  return dp[0][0];
}
