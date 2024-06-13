function detectCapitalUse(word) {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
}
// Test
console.log(detectCapitalUse("USA")); // Output: true
