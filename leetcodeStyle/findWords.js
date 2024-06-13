function findWords(words) {
  const rows = [
      new Set('qwertyuiop'),
      new Set('asdfghjkl'),
      new Set('zxcvbnm')
  ];
  return words.filter(word => {
      const lowercaseWord = word.toLowerCase();
      return rows.some(row => [...lowercaseWord].every(char => row.has(char)));
  });
}
// Test
console.log(findWords(["Hello","Alaska","Dad","Peace"])); // Output: ["Alaska", "Dad"]
