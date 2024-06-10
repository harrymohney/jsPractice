function findLengthOfLCIS(nums) {
  if (nums.length === 0) return 0;
  let maxLength = 1, currentLength = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
          currentLength++;
          maxLength = Math.max(maxLength, currentLength);
      } else {
          currentLength = 1;
      }
  }
  return maxLength;
}
// Test
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // Output: 3
