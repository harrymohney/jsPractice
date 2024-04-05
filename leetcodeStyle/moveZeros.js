function moveZeroes(nums) {
  let i = 0;
  for (let num of nums) {
      if (num !== 0) {
          nums[i++] = num;
      }
  }
  while (i < nums.length) {
      nums[i++] = 0;
  }
}
