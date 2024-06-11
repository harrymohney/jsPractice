function maximumProduct(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
}
// Test
console.log(maximumProduct([1,2,3,4])); // Output: 24
