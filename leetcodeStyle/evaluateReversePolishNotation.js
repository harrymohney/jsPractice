function evalRPN(tokens) {
  const stack = [];
  const operators = ['+', '-', '*', '/'];
  for (let token of tokens) {
      if (!operators.includes(token)) {
          stack.push(parseInt(token));
      } else {
          const b = stack.pop();
          const a = stack.pop();
          switch (token) {
              case '+':
                  stack.push(a + b);
                  break;
              case '-':
                  stack.push(a - b);
                  break;
              case '*':
                  stack.push(a * b);
                  break;
              case '/':
                  stack.push(parseInt(a / b));
                  break;
          }
      }
  }
  return stack.pop();
}
