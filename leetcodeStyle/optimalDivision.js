function optimalDivision(nums) {
  if (nums.length === 1) return `${nums[0]}`;
  if (nums.length === 2) return `${nums[0]}/${nums[1]}`;
  
  const rest = nums.slice(1).join('/');
  return `${nums[0]}/(${rest})`;
}
