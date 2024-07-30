function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
  }
  return result;
}
// Test
console.log(chunk(['a', 'b', 'c', 'd'], 2)); // Output: [['a', 'b'], ['c', 'd']]
