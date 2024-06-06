function missingNumber(nums) {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
      sum += i - nums[i];
  }
  return sum;
}
// Test
console.log(missingNumber([3, 0, 1])); // Output: 2
