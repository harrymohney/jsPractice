function countSubsets(nums, k) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % k !== 0) return 0;
  const target = sum / k;
  const dp = Array(1 << nums.length).fill(0).map(_ => Array(k + 1).fill(-1));
  return backtrack(nums, 0, target, k, 0, dp);
}

function backtrack(nums, mask, target, k, index, dp) {
  if (k === 0) return mask === (1 << nums.length) - 1 ? 1 : 0;
  if (dp[mask][k] !== -1) return dp[mask][k];
  dp[mask][k] = 0;
  for (let i = index; i < nums.length; i++) {
      if (!(mask & (1 << i))) {
          const newMask = mask | (1 << i);
          if (nums[i] === target) {
              dp[mask][k] += backtrack(nums, newMask, target, k - 1, 0, dp);
          } else if (nums[i] < target) {
              dp[mask][k] += backtrack(nums, newMask, target - nums[i], k, i + 1, dp);
          }
      }
  }
  return dp[mask][k];
}
