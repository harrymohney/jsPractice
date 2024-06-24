function heightChecker(heights) {
  const expected = [...heights].sort((a, b) => a - b);
  return heights.reduce((count, height, index) => count + (height !== expected[index] ? 1 : 0), 0);
}
// Test
console.log(heightChecker([1,1,4,2,1,3])); // Output: 3
