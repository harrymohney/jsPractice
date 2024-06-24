function removeOuterParentheses(S) {
  let result = '', open = 0;
  for (const char of S) {
      if (char === '(' && open++ > 0) result += char;
      if (char === ')' && open-- > 1) result += char;
  }
  return result;
}
// Test
console.log(removeOuterParentheses("(()())(())")); // Output: "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // Output: "()()()()(())"
