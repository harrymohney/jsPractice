function dailyTemperatures(T) {
  const res = new Array(T.length).fill(0);
  const stack = [];
  for (let i = 0; i < T.length; i++) {
      while (stack.length && T[i] > T[stack[stack.length - 1]]) {
          const j = stack.pop();
          res[j] = i - j;
      }
      stack.push(i);
  }
  return res;
}
// Test
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
