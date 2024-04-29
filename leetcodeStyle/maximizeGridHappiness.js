function getMaxGridHappiness(m, n, introvertsCount, extrovertsCount) {
  const memo = {};
  const dfs = (i, mask, introvertsLeft, extrovertsLeft, lastRow) => {
      if (i === m * n) return 0;
      const key = `${i}-${mask}-${introvertsLeft}-${extrovertsLeft}-${lastRow}`;
      if (memo.hasOwnProperty(key)) return memo[key];
      let maxHappiness = dfs(i + 1, mask >> 1, introvertsLeft, extrovertsLeft, lastRow >> 1);
      const row = Math.floor(i / n);
      const col = i % n;
      const prevRowMask = lastRow & ((1 << n) - 1);
      const prevColMask = mask & ((1 << n) - 1);
      if (introvertsLeft > 0) {
          let gain = 120;
          if (col > 0 && (prevColMask & 1)) gain -= 30;
          if (row > 0 && (prevRowMask & (1 << col))) gain -= 30;
          maxHappiness = Math.max(maxHappiness, gain + dfs(i + 1, mask >> 1, introvertsLeft - 1, extrovertsLeft, lastRow >> 1));
      }
      if (extrovertsLeft > 0) {
          let gain = 40;
          if (col > 0 && (prevColMask & 1)) gain -= 30;
          if (row > 0 && (prevRowMask & (1 << col))) gain -= 30;
          maxHappiness = Math.max(maxHappiness, gain + dfs(i + 1, mask >> 1, introvertsLeft, extrovertsLeft - 1, lastRow >> 1));
      }
      maxHappiness = Math.max(maxHappiness, dfs(i + 1, mask >> 1, introvertsLeft, extrovertsLeft, lastRow >> 1));
      memo[key] = maxHappiness;
      return maxHappiness;
  };
  return dfs(0, (1 << n) - 1, introvertsCount, extrovertsCount, 0);
}
