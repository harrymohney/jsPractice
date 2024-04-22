function canIWin(maxChoosableInteger, desiredTotal) {
  if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal) return false;
  const memo = new Map();
  const dfs = (state, total) => {
      if (total >= desiredTotal) return false;
      if (memo.has(state)) return memo.get(state);
      for (let i = 1; i <= maxChoosableInteger; i++) {
          const mask = 1 << i;
          if ((state & mask) === 0) {
              if (!dfs(state | mask, total + i)) {
                  memo.set(state, true);
                  return true;
              }
          }
      }
      memo.set(state, false);
      return false;
  };
  return dfs(0, 0);
}
