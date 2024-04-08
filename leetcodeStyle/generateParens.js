function generateParenthesis(n) {
  const result = [];
  function backtrack(left, right, path) {
      if (left === n && right === n) {
          result.push(path);
          return;
      }
      if (left < n) {
          backtrack(left + 1, right, path + '(');
      }
      if (right < left) {
          backtrack(left, right + 1, path + ')');
      }
  }
  backtrack(0, 0, '');
  return result;
}
