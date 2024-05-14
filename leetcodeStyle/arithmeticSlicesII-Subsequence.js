function numberOfArithmeticSlices(nums) {
  const n = nums.length;
  let count = 0;
  const dp = [];

  for (let i = 0; i < n; i++) {
      dp[i] = new Map();
      for (let j = 0; j < i; j++) {
          const diff = nums[i] - nums[j];
          const prevCount = dp[j].get(diff) || 0;
          const currentCount = dp[i].get(diff) || 0;
          dp[i].set(diff, currentCount + prevCount + 1);
          count += prevCount;
      }
  }

  return count;
}
