function uniqueMorseRepresentations(words) {
  const morse = [
      ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
      "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
      "..-", "...-", ".--", "-..-", "-.--", "--.."
  ];
  const seen = new Set();
  for (const word of words) {
      const code = word.split('').map(char => morse[char.charCodeAt(0) - 97]).join('');
      seen.add(code);
  }
  return seen.size;
}
// Test
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // Output: 2
