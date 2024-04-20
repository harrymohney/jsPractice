function numOfWays(nums) {
  const mod = 10 ** 9 + 7;
  const factorial = Array(nums.length + 1).fill(0);
  factorial[0] = 1;
  for (let i = 1; i <= nums.length; i++) {
      factorial[i] = (factorial[i - 1] * i) % mod;
  }
  const count = (n) => {
      if (n <= 2) return 1;
      let smaller = 0, larger = 0;
      for (let i = 1; i < n; i++) {
          if (nums[i] < nums[0]) {
              smaller++;
          } else {
              larger++;
          }
      }
      return (factorial[smaller] * factorial[larger] * count(smaller) * count(larger)) % mod;
  };
  return (count(nums.length) - 1 + mod) % mod;
}
