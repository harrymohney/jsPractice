function arrayNesting(nums) {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== -1) {
          let count = 0, start = nums[i];
          while (nums[start] !== -1) {
              const temp = start;
              start = nums[start];
              count++;
              nums[temp] = -1;
          }
          maxLength = Math.max(maxLength, count);
      }
  }
  return maxLength;
}
