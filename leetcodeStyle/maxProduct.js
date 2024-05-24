function maxProduct(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(nums[0] * nums[1], nums[n - 1] * nums[n - 2]);
}
// Test
console.log(maxProduct([3, 4, 1, 2])); // Output: 12
