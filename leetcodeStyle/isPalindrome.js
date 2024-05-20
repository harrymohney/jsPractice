function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}
// Test
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
