function reverseWords(s) {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
// Test
console.log(reverseWords("Let's take LeetCode contest")); // Output: "s'teL ekat edoCteeL tsetnoc"
