function subsetsWithDup(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  backtrack(nums, [], result, 0);
  return result;
}

function backtrack(nums, current, result, start) {
  result.push([...current]);
  for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      current.push(nums[i]);
      backtrack(nums, current, result, i + 1);
      current.pop();
  }
}
