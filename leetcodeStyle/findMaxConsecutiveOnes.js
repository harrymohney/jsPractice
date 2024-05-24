function findMaxConsecutiveOnes(nums) {
  let maxCount = 0, count = 0;
  for (const num of nums) {
      count = num === 1 ? count + 1 : 0;
      maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}
// Test
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
