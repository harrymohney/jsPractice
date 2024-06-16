function diStringMatch(S) {
  const n = S.length;
  let lo = 0, hi = n;
  const result = [];
  for (const c of S) {
      result.push(c === 'I' ? lo++ : hi--);
  }
  result.push(lo); 
  return result;
}
// Test
console.log(diStringMatch("IDID")); // Output: [0,4,1,3,2]
