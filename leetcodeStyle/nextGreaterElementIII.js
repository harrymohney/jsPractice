function nextGreaterElement(n) {
  const nums = (n + '').split('');
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }
  if (i === -1) return -1;
  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
      j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  const remaining = nums.splice(i + 1).sort((a, b) => a - b);
  const result = parseInt(nums.concat(remaining).join(''));
  return result > 2 ** 31 - 1 ? -1 : result;
}
