function lengthOfLastWord(s) {
  return s.trim().split(' ').pop().length;
}
// Test
console.log(lengthOfLastWord("Hello World")); // Output: 5
