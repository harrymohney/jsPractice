function calculate(s) {
  const stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!isNaN(parseInt(char)) && char !== ' ') {
          num = num * 10 + parseInt(char);
      }
      if ((isNaN(parseInt(char)) && char !== ' ') || i === s.length - 1) {
          if (sign === '+') {
              stack.push(num);
          } else if (sign === '-') {
              stack.push(-num);
          } else if (sign === '*') {
              stack.push(stack.pop() * num);
          } else if (sign === '/') {
              stack.push(parseInt(stack.pop() / num));
          }
          sign = char;
          num = 0;
      }
  }
  return stack.reduce((acc, val) => acc + val, 0);
}
