function productExceptSelf(nums) {
  const result = Array(nums.length).fill(1);
  let left = 1, right = 1;
  for (let i = 0; i < nums.length; i++) {
      result[i] *= left;
      left *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= right;
      right *= nums[i];
  }
  return result;
}
// Test
console.log(productExceptSelf([1,2,3,4])); // Output: [24,12,8,6]
