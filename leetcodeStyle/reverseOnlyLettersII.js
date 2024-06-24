function reverseOnlyLetters(S) {
  const letters = S.replace(/[^a-zA-Z]/g, '').split('');
  return S.split('').map(char => /[a-zA-Z]/.test(char) ? letters.pop() : char).join('');
}
// Test
console.log(reverseOnlyLetters("ab-cd")); // Output: "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // Output: "j-Ih-gfE-dCba"
