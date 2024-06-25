function shortestToChar(S, C) {
  const result = [];
  let prev = -Infinity;
  for (let i = 0; i < S.length; i++) {
      if (S[i] === C) prev = i;
      result[i] = i - prev;
  }
  prev = Infinity;
  for (let i = S.length - 1; i >= 0; i--) {
      if (S[i] === C) prev = i;
      result[i] = Math.min(result[i], prev - i);
  }
  return result;
}
// Test
console.log(shortestToChar("loveleetcode", 'e')); // Output: [3,2,1,0,1,0,0,1,2,2,1,0]
