function productExceptSelf(nums) {
  const output = new Array(nums.length).fill(1);
  let leftProduct = 1, rightProduct = 1;
  for (let i = 0; i < nums.length; i++) {
      output[i] *= leftProduct;
      leftProduct *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
      output[i] *= rightProduct;
      rightProduct *= nums[i];
  }
  return output;
}
// Test
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
