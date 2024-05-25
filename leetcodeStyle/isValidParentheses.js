function isValidParentheses(s) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };
  for (const char of s) {
      if (pairs[char]) {
          stack.push(char);
      } else {
          if (stack.length === 0 || pairs[stack.pop()] !== char) {
              return false;
          }
      }
  }
  return stack.length === 0;
}
// Test
console.log(isValidParentheses("{[]}")); // Output: true
