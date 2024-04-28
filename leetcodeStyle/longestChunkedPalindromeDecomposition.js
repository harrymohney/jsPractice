function longestDecomposition(text) {
  let left = '';
  let right = '';
  let count = 0;
  const n = text.length;
  for (let i = 0; i < n; i++) {
      left = left + text[i];
      right = text[n - 1 - i] + right;
      if (left === right) {
          count++;
          left = '';
          right = '';
      }
  }
  return count;
}
