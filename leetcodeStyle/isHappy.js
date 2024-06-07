function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
      seen.add(n);
      n = String(n).split('').reduce((sum, num) => sum + Math.pow(num, 2), 0);
  }
  return n === 1;
}
// Test
console.log(isHappy(19)); // Output: true
