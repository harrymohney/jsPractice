function longestWPI(hours) {
  const n = hours.length;
  const prefixSum = [0];
  for (const hour of hours) {
      prefixSum.push(prefixSum[prefixSum.length - 1] + (hour > 8 ? 1 : -1));
  }

  const stack = [];
  for (let i = 0; i < n + 1; i++) {
      if (!stack.length || prefixSum[stack[stack.length - 1]] > prefixSum[i]) {
          stack.push(i);
      }
  }

  let longest = 0;
  for (let i = n; i >= 0; i--) {
      while (stack.length && prefixSum[stack[stack.length - 1]] < prefixSum[i]) {
          longest = Math.max(longest, i - stack.pop());
      }
  }

  return longest;
}
