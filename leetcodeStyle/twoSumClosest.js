function twoSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  let left = 0, right = nums.length - 1;
  while (left < right) {
      const sum = nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
          closestSum = sum;
      }
      if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
  return closestSum;
}
// Test
console.log(twoSumClosest([-1, 2, 1, -4], 1)); // Output: 2
