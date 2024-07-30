function uniq(array) {
  return [...new Set(array)];
}
// Test
console.log(uniq([2, 1, 2])); // Output: [2, 1]
