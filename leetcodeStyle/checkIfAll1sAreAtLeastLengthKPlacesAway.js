function kLengthApart(nums, k) {
  let prevIndex = -k - 1;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          if (i - prevIndex <= k) return false;
          prevIndex = i;
      }
  }
  return true;
}
