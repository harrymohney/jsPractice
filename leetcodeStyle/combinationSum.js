function combinationSum(candidates, target) {
  const result = [];
  backtrack(candidates, target, [], result, 0);
  return result;
}

function backtrack(candidates, target, current, result, start) {
  if (target < 0) return;
  if (target === 0) {
      result.push([...current]);
      return;
  }
  for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(candidates, target - candidates[i], current, result, i);
      current.pop();
  }
}
