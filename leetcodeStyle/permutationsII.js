function permuteUnique(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  backtrack(nums, [], result, Array(nums.length).fill(false));
  return result;
}

function backtrack(nums, current, result, used) {
  if (current.length === nums.length) {
      result.push([...current]);
      return;
  }
  for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
      used[i] = true;
      current.push(nums[i]);
      backtrack(nums, current, result, used);
      used[i] = false;
      current.pop();
  }
}
