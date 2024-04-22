function splitArray(nums, m) {
  let left = Math.max(...nums);
  let right = nums.reduce((a, b) => a + b);
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isValid(nums, m, mid)) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  return left;
}

function isValid(nums, m, target) {
  let sum = 0;
  let count = 1;
  for (const num of nums) {
      sum += num;
      if (sum > target) {
          count++;
          sum = num;
          if (count > m) return false;
      }
  }
  return true;
}
