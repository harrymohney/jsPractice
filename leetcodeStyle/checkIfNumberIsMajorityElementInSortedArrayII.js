function isMajorityElement(nums, target) {
  const n = nums.length;
  const freq = {};
  for (const num of nums) {
      freq[num] = (freq[num] || 0) + 1;
      if (freq[num] > n / 3) {
          return num === target;
      }
  }
  return false;
}
