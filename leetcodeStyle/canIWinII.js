function canIWin(maxChoosableInteger, desiredTotal) {
  if (desiredTotal <= 0) return true;
  if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;

  const memo = new Map();

  const canWin = (mask, total) => {
      if (total <= 0) return false;
      if (memo.has(mask)) return memo.get(mask);

      for (let i = 1; i <= maxChoosableInteger; i++) {
          const currentMask = (1 << (i - 1));
          if (!(mask & currentMask)) {
              if (!canWin(mask | currentMask, total - i)) {
                  memo.set(mask, true);
                  return true;
              }
          }
      }

      memo.set(mask, false);
      return false;
  };

  return canWin(0, desiredTotal);
}
