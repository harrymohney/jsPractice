function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
// Test
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
