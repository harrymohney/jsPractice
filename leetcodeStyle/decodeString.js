function decodeString(s) {
  const stack = [];
  
  for (let char of s) {
      if (char !== ']') {
          stack.push(char);
      } else {
          let currentStr = '';
          while (stack.length && stack[stack.length - 1] !== '[') {
              currentStr = stack.pop() + currentStr;
          }
          stack.pop(); // pop '['
          
          let num = '';
          while (stack.length && !isNaN(stack[stack.length - 1])) {
              num = stack.pop() + num;
          }
          const repeatTimes = parseInt(num);
          
          stack.push(currentStr.repeat(repeatTimes));
      }
  }
  
  return stack.join('');
}
