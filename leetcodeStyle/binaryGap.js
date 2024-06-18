function binaryGap(N) {
  const binary = N.toString(2);
  let last = -1, maxGap = 0;
  for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
          if (last !== -1) {
              maxGap = Math.max(maxGap, i - last);
          }
          last = i;
      }
  }
  return maxGap;
}
// Test
console.log(binaryGap(22)); // Output: 2
console.log(binaryGap(5)); // Output: 2
console.log(binaryGap(6)); // Output: 1
