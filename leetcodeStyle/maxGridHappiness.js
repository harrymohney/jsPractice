function getMaxGridHappiness(m, n, introvertsCount, extrovertsCount) {
  const key = `${m},${n},${introvertsCount},${extrovertsCount}`;
  const memo = {};

  const dfs = (idx, i, ic, ec, state) => {
      if (i === m * n) return 0;
      if (memo[state] !== undefined) return memo[state];

      const [r, c] = [Math.floor(i / n), i % n];
      const newState = state.slice(1) + "0";

      let best = dfs(idx + 1, i + 1, ic, ec, newState);

      if (ic > 0) {
          let add = 120;
          if (r > 0 && state[0] === "2") add -= 60;
          if (c > 0 && state[1] === "2") add -= 60;
          best = Math.max(best, add + dfs(idx + 1, i + 1, ic - 1, ec, `1${newState}`));
      }

      if (ec > 0) {
          let add = 40;
          if (r > 0 && state[0] === "1") add -= 60;
          if (c > 0 && state[1] === "1") add -= 60;
          best = Math.max(best, add + dfs(idx + 1, i + 1, ic, ec - 1, `2${newState}`));
      }

      return memo[state] = best;
  };

  return dfs(0, 0, introvertsCount, extrovertsCount, "0".repeat(n));
}
