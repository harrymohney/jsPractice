function getKth(lo, hi, k) {
  const memo = new Map();
  const power = (x) => {
      if (x === 1) return 0;
      if (memo.has(x)) return memo.get(x);
      const next = x % 2 === 0 ? x / 2 : 3 * x + 1;
      const steps = 1 + power(next);
      memo.set(x, steps);
      return steps;
  };
  const nums = [];
  for (let i = lo; i <= hi; i++) {
      nums.push({ num: i, pow: power(i) });
  }
  nums.sort((a, b) => a.pow !== b.pow ? a.pow - b.pow : a.num - b.num);
  return nums[k - 1].num;
}
