function findLengthOfLCIS(nums) {
  let maxLength = 0, currentLength = 0;
  for (let i = 0; i < nums.length; i++) {
      if (i === 0 || nums[i] > nums[i - 1]) {
          currentLength++;
          maxLength = Math.max(maxLength, currentLength);
      } else {
          currentLength = 1;
      }
  }
  return maxLength;
}
// Test
console.log(findLengthOfLCIS([1,3,5,4,7])); // Output: 3
console.log(findLengthOfLCIS([2,2,2,2,2])); // Output: 1
