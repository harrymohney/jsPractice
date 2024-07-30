function zip(...arrays) {
  const length = Math.max(...arrays.map(arr => arr.length));
  const result = Array.from({ length });
  for (let i = 0; i < length; i++) {
      result[i] = arrays.map(arr => arr[i]);
  }
  return result;
}
// Test
console.log(zip(['a', 'b'], [1, 2], [true, false])); // Output: [['a', 1, true], ['b', 2, false]]
