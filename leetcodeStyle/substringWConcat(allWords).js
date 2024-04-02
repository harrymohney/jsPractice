function findSubstring(s, words) {
  const result = [];
  if (words.length === 0 || s.length === 0) return result;
  const wordLength = words[0].length;
  const wordMap = {};
  for (let word of words) {
      wordMap[word] = (wordMap[word] || 0) + 1;
  }
  for (let i = 0; i <= s.length - words.length * wordLength; i++) {
      const seen = {};
      let j = 0;
      while (j < words.length) {
          const word = s.substr(i + j * wordLength, wordLength);
          if (!(word in wordMap)) break;
          seen[word] = (seen[word] || 0) + 1;
          if (seen[word] > wordMap[word]) break;
          j++;
      }
      if (j === words.length) result.push(i);
  }
  return result;
}
