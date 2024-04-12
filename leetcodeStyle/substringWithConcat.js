function findSubstring(s, words) {
  if (words.length === 0 || s.length === 0) return [];
  const wordMap = {};
  for (const word of words) {
      wordMap[word] = wordMap[word] ? wordMap[word] + 1 : 1;
  }
  const wordLength = words[0].length;
  const totalLength = wordLength * words.length;
  const result = [];
  for (let i = 0; i < wordLength; i++) {
      let left = i, right = i, count = 0;
      const tempMap = {};
      while (right + wordLength <= s.length) {
          const word = s.substring(right, right + wordLength);
          right += wordLength;
          if (wordMap[word] === undefined) {
              count = 0;
              left = right;
              tempMap = {};
          } else {
              tempMap[word] = tempMap[word] ? tempMap[word] + 1 : 1;
              count++;
              while (tempMap[word] > wordMap[word]) {
                  const leftWord = s.substring(left, left + wordLength);
                  tempMap[leftWord]--;
                  count--;
                  left += wordLength;
              }
              if (count === words.length) {
                  result.push(left);
              }
          }
      }
  }
  return result;
}
