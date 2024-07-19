function findSubstring(s, words) {
  if (words.length === 0 || s.length === 0) return [];
  const wordLen = words[0].length;
  const allWordsLen = words.length * wordLen;
  const result = [];
  const wordCount = {};
  for (const word of words) wordCount[word] = (wordCount[word] || 0) + 1;
  for (let i = 0; i <= s.length - allWordsLen; i++) {
      const seen = {};
      let j = 0;
      while (j < words.length) {
          const word = s.substring(i + j * wordLen, i + (j + 1) * wordLen);
          if (!wordCount[word]) break;
          seen[word] = (seen[word] || 0) + 1;
          if (seen[word] > wordCount[word]) break;
          j++;
      }
      if (j === words.length) result.push(i);
  }
  return result;
}
// Test
const s = "barfoothefoobarman";
const words = ["foo","bar"];
console.log(findSubstring(s, words)); // Output: [0,9]
