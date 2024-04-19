function numberOfArithmeticSlices(nums) {
  let count = 0;
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
      dp[i] = new Map();
      for (let j = 0; j < i; j++) {
          const diff = nums[i] - nums[j];
          const prevCount = dp[j].get(diff) || 0;
          const currentCount = (dp[i].get(diff) || 0) + prevCount + 1;
          dp[i].set(diff, currentCount);
          count += prevCount;
      }
  }
  return count;
}
