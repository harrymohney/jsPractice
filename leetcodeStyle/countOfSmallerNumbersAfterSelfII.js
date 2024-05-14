function countSmaller(nums) {
  const counts = new Array(nums.length).fill(0);
  const sorted = [];
  
  for (let i = nums.length - 1; i >= 0; i--) {
      const idx = findIndex(sorted, nums[i]);
      counts[i] = idx;
      sorted.splice(idx, 0, nums[i]);
  }
  
  return counts;
}

function findIndex(sorted, target) {
  let left = 0;
  let right = sorted.length;
  
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sorted[mid] < target) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  
  return left;
}
