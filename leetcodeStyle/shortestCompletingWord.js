function shortestCompletingWord(licensePlate, words) {
  const letters = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
  const countLetters = s => {
      const count = {};
      for (const char of s) {
          count[char] = (count[char] || 0) + 1;
      }
      return count;
  };
  const licenseCount = countLetters(letters);
  const isCompleting = word => {
      const wordCount = countLetters(word);
      return Object.keys(licenseCount).every(char => wordCount[char] >= licenseCount[char]);
  };
  return words.filter(isCompleting).sort((a, b) => a.length - b.length)[0];
}
// Test
console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])); // Output: "steps"
