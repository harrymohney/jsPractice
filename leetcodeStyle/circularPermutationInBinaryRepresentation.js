function circularPermutation(n, start) {
  const result = [start];
  for (let i = 0; i < n; i++) {
      for (let j = result.length - 1; j >= 0; j--) {
          result.push(result[j] ^ (1 << i));
      }
  }
  return result;
}
