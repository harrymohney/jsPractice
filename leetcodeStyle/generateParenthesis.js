function generateParenthesis(n) {
  const result = [];
  backtrack(n, n, '', result);
  return result;
}

function backtrack(left, right, current, result) {
  if (left === 0 && right === 0) {
      result.push(current);
      return;
  }
  if (left > 0) {
      backtrack(left - 1, right, current + '(', result);
  }
  if (right > left) {
      backtrack(left, right - 1, current + ')', result);
  }
}
