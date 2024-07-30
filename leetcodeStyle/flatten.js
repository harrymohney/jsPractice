function flatten(array) {
  return array.reduce((acc, val) => acc.concat(val), []);
}
// Test
console.log(flatten([1, [2, [3, [4]], 5]])); // Output: [1, 2, [3, [4]], 5]
