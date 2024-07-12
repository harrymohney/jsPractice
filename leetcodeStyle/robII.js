function rob(nums) {
  if (nums.length === 1) return nums[0];
  function robLinear(arr) {
      let prevMax = 0, currMax = 0;
      for (const num of arr) {
          const temp = currMax;
          currMax = Math.max(currMax, prevMax + num);
          prevMax = temp;
      }
      return currMax;
  }
  return Math.max(robLinear(nums.slice(0, nums.length - 1)), robLinear(nums.slice(1)));
}
// Test
console.log(rob([2,3,2])); // Output: 3
