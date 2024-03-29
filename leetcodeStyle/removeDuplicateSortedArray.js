function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          nums[index++] = nums[i];
      }
  }
  return index;
}
