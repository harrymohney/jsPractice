function rob(nums) {
  let prevMax = 0, currMax = 0;
  for (const num of nums) {
      const temp = currMax;
      currMax = Math.max(currMax, prevMax + num);
      prevMax = temp;
  }
  return currMax;
}
// Test
console.log(rob([1,2,3,1])); // Output: 4
