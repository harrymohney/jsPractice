function difference(array, ...values) {
  const toExclude = new Set(values.flat());
  return array.filter(item => !toExclude.has(item));
}
// Test
console.log(difference([2, 1], [2, 3])); // Output: [1]
