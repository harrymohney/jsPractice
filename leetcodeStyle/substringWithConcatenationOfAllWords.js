function findSubstring(s, words) {
  if (words.length === 0) return [];
  const wordMap = {};
  for (let word of words) {
      if (!(word in wordMap)) wordMap[word] = 0;
      wordMap[word]++;
  }
  const wordLen = words[0].length;
  const totalLen = words.length * wordLen;
  const result = [];
  for (let i = 0; i <= s.length - totalLen; i++) {
      const tempMap = {...wordMap};
      let j = i;
      while (j < i + totalLen) {
          const word = s.substring(j, j + wordLen);
          if (!(word in tempMap) || tempMap[word] === 0) break;
          tempMap[word]--;
          j += wordLen;
      }
      if (j === i + totalLen) result.push(i);
  }
  return result;
}
