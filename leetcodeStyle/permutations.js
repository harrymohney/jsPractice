function permute(nums) {
  const result = [];
  backtrack(nums, [], result);
  return result;
}

function backtrack(nums, current, result) {
  if (current.length === nums.length) {
      result.push([...current]);
      return;
  }
  for (let num of nums) {
      if (!current.includes(num)) {
          current.push(num);
          backtrack(nums, current, result);
          current.pop();
      }
  }
}
