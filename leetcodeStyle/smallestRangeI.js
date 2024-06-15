function smallestRangeI(A, K) {
  const min = Math.min(...A);
  const max = Math.max(...A);
  return Math.max(0, max - min - 2 * K);
}
// Test
console.log(smallestRangeI([1,3,6], 3)); // Output: 0
