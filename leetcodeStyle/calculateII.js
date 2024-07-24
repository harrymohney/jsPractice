function calculate(s) {
  let stack = [], num = 0, sign = 1, result = 0;
  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (/\d/.test(char)) {
          num = num * 10 + parseInt(char);
      } else if (char === '+') {
          result += sign * num;
          num = 0;
          sign = 1;
      } else if (char === '-') {
          result += sign * num;
          num = 0;
          sign = -1;
      } else if (char === '(') {
          stack.push(result, sign);
          result = 0;
          sign = 1;
      } else if (char === ')') {
          result += sign * num;
          result *= stack.pop();
          result += stack.pop();
          num = 0;
      }
  }
  return result + sign * num;
}
// Test
console.log(calculate("1 + 1")); // Output: 2
