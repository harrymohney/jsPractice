function minCut(s) {
  const n = s.length;
  const dp = Array(n).fill().map(() => Array(n).fill(false));
  const cuts = Array(n).fill(0);

  for (let end = 0; end < n; end++) {
      let minCuts = end;
      for (let start = 0; start <= end; start++) {
          if (s[start] === s[end] && (end - start <= 1 || dp[start + 1][end - 1])) {
              dp[start][end] = true;
              minCuts = start === 0 ? 0 : Math.min(minCuts, cuts[start - 1] + 1);
          }
      }
      cuts[end] = minCuts;
  }

  return cuts[n - 1];
}
