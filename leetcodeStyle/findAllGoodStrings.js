function findGoodStrings(n, s1, s2, evil) {
  const MOD = 1e9 + 7;

  const getNextState = (pattern, ch) => {
      while (pattern > 0 && evil.charAt(pattern) !== ch) {
          pattern = lps[pattern - 1];
      }
      if (evil.charAt(pattern) === ch) {
          pattern++;
      }
      return pattern;
  };

  const buildLPS = (evil) => {
      const lps = new Array(evil.length).fill(0);
      let pattern = 0;

      for (let i = 1; i < evil.length; i++) {
          pattern = getNextState(pattern, evil.charAt(i));
          lps[i] = pattern;
      }

      return lps;
  };

  const dp = new Array(n + 1).fill(null).map(() => new Array(evil.length + 1).fill(null).map(() => new Array(2).fill(null).map(() => new Array(2).fill(-1))));

  const solve = (pos, pat, tight1, tight2) => {
      if (pat === evil.length) return 0;
      if (pos === n) return 1;

      if (dp[pos][pat][tight1][tight2] !== -1) {
          return dp[pos][pat][tight1][tight2];
      }

      const from = tight1 ? s1.charAt(pos) : 'a';
      const to = tight2 ? s2.charAt(pos) : 'z';
      let res = 0;

      for (let ch = from.charCodeAt(0); ch <= to.charCodeAt(0); ch++) {
          const newPat = getNextState(pat, String.fromCharCode(ch));
          res = (res + solve(pos + 1, newPat, tight1 && ch === from.charCodeAt(0), tight2 && ch === to.charCodeAt(0))) % MOD;
      }

      return dp[pos][pat][tight1][tight2] = res;
  };

  const lps = buildLPS(evil);
  return solve(0, 0, true, true);
}
