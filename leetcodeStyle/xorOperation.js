function xorOperation(n, start) {
  let xor = 0;
  for (let i = 0; i < n; i++) {
      xor ^= start + 2 * i;
  }
  return xor;
}
// Test
console.log(xorOperation(5, 0)); // Output: 8
