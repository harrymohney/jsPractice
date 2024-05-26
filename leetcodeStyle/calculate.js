function calculate(s) {
  let stack = [], num = 0, sign = '+';
  s = s.replace(/\s+/g, '');
  for (let i = 0; i < s.length; i++) {
      if (!isNaN(s[i])) {
          num = num * 10 + parseInt(s[i]);
      }
      if (isNaN(s[i]) || i === s.length - 1) {
          if (sign === '-') stack.push(-num);
          if (sign === '+') stack.push(num);
          if (sign === '*') stack.push(stack.pop() * num);
          if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
          sign = s[i];
          num = 0;
      }
  }
  return stack.reduce((acc, val) => acc + val, 0);
}
// Test
console.log(calculate("3+2*2")); // Output: 7
