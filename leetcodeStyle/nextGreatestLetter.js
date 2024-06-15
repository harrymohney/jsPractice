function nextGreatestLetter(letters, target) {
  for (const letter of letters) {
      if (letter > target) return letter;
  }
  return letters[0];
}
// Test
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // Output: "c"
