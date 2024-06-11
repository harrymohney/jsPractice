function findMaxConsecutiveOnes(nums) {
  let maxCount = 0, count = 0;
  for (const num of nums) {
      if (num === 1) {
          count++;
          maxCount = Math.max(maxCount, count);
      } else {
          count = 0;
      }
  }
  return maxCount;
}
// Test
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // Output: 3
