function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const queue = [[beginWord, 1]];
  while (queue.length) {
      const [word, length] = queue.shift();
      if (word === endWord) return length;
      for (let i = 0; i < word.length; i++) {
          for (let j = 97; j < 123; j++) {
              const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
              if (wordSet.has(newWord)) {
                  queue.push([newWord, length + 1]);
                  wordSet.delete(newWord);
              }
          }
      }
  }
  return 0;
}
// Test
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord, endWord, wordList)); // Output: 5
