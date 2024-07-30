function compact(array) {
  return array.filter(Boolean);
}
// Test
console.log(compact([0, 1, false, 2, '', 3])); // Output: [1, 2, 3]
