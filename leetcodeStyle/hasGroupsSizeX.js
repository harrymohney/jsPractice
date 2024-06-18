function hasGroupsSizeX(deck) {
  const count = {};
  for (const card of deck) {
      count[card] = (count[card] || 0) + 1;
  }
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  let g = Object.values(count).reduce((a, b) => gcd(a, b));
  return g >= 2;
}
// Test
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])); // Output: true
