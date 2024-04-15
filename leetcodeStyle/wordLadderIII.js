function findLadders(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  const result = [];
  const queue = [[beginWord, [beginWord]]];
  const visited = new Set();
  let found = false;
  while (queue.length && !found) {
      const levelVisited = new Set();
      const size = queue.length;
      for (let i = 0; i < size; i++) {
          const [word, path] = queue.shift();
          const chars = word.split('');
          for (let j = 0; j < chars.length; j++) {
              const originalChar = chars[j];
              for (let k = 97; k <= 122; k++) {
                  const newChar = String.fromCharCode(k);
                  if (newChar !== originalChar) {
                      chars[j] = newChar;
                      const newWord = chars.join('');
                      if (newWord === endWord) {
                          found = true;
                          result.push([...path, newWord]);
                      }
                      if (wordSet.has(newWord) && !visited.has(newWord)) {
                          queue.push([newWord, [...path, newWord]]);
                          levelVisited.add(newWord);
                      }
                  }
              }
              chars[j] = originalChar;
          }
      }
      levelVisited.forEach(word => visited.add(word));
  }
  return result;
}
