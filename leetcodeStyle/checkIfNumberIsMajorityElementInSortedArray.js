function isMajorityElement(nums, target) {
  const n = nums.length;
  const firstIdx = nums.indexOf(target);
  const lastIdx = nums.lastIndexOf(target);
  return lastIdx - firstIdx + 1 > n / 2;
}

