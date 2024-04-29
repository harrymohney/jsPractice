function maximumRequests(n, requests) {
  const m = requests.length;
  let maxAchievable = 0;

  const backtrack = (index, balance) => {
      if (index === m) {
          if (balance.every(b => b === 0)) {
              maxAchievable = Math.max(maxAchievable, countOnes(balance));
          }
          return;
      }
      const [from, to] = requests[index];
      balance[from]--;
      balance[to]++;
      backtrack(index + 1, balance);
      balance[from]++;
      balance[to]--;
      backtrack(index + 1, balance);
  };

  const countOnes = (arr) => {
      return arr.reduce((acc, val) => acc + (val === 0 ? 0 : 1), 0);
  };

  backtrack(0, Array(n).fill(0));
  return maxAchievable;
}
