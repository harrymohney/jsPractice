function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
      seen.add(n);
      n = n.toString().split('').reduce((sum, digit) => sum + digit ** 2, 0);
  }
  return n === 1;
}
// Test
console.log(isHappy(19)); // Output: true
