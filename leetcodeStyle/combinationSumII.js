function combinationSum2(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
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
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      current.push(candidates[i]);
      backtrack(candidates, target - candidates[i], current, result, i + 1);
      current.pop();
  }
}
