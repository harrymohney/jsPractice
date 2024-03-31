function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const queue = [];
  queue.push(beginWord);
  let level = 1;
  while (queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
          const currentWord = queue.shift();
          for (let j = 0; j < currentWord.length; j++) {
              for (let k = 0; k < 26; k++) {
                  const newWord = currentWord.slice(0, j) + String.fromCharCode(97 + k) + currentWord.slice(j + 1);
                  if (wordSet.has(newWord)) {
                      if (newWord === endWord) return level + 1;
                      queue.push(newWord);
                      wordSet.delete(newWord);
                  }
              }
          }
      }
      level++;
  }
  return 0;
}
