function reverseOnlyLetters(S) {
  const letters = S.match(/[a-zA-Z]/g);
  return S.split('').map(char => /[a-zA-Z]/.test(char) ? letters.pop() : char).join('');
}
// Test
console.log(reverseOnlyLetters("ab-cd")); // Output: "dc-ba"
