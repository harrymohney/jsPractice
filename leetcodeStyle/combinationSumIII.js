function combinationSum3(k, n) {
  const result = [];
  backtrack(k, n, [], result, 1);
  return result;
}

function backtrack(k, n, current, result, start) {
  if (n < 0 || current.length > k) return;
  if (n === 0 && current.length === k) {
      result.push([...current]);
      return;
  }
  for (let i = start; i <= 9; i++) {
      current.push(i);
      backtrack(k, n - i, current, result, i + 1);
      current.pop();
  }
}
