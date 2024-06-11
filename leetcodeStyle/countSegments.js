function countSegments(s) {
  return s.split(' ').filter(segment => segment !== '').length;
}
// Test
console.log(countSegments("Hello, my name is John")); // Output: 5
