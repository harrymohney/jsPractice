function reverseOnlyLetters(S) {
  const letters = S.replace(/[^a-zA-Z]/g, '').split('');
  return S.split('').map(c => /[a-zA-Z]/.test(c) ? letters.pop() : c).join('');
}
// Test
console.log(reverseOnlyLetters("ab-cd")); // Output: "dc-ba"
