function findLadders(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  const result = [];
  const queue = [[beginWord]];
  let found = false;
  const visited = new Set();
  while (queue.length && !found) {
      const levelVisited = new Set();
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
          const path = queue.shift();
          const word = path[path.length - 1];
          for (let j = 0; j < word.length; j++) {
              for (let k = 97; k < 123; k++) {
                  const newWord = word.slice(0, j) + String.fromCharCode(k) + word.slice(j + 1);
                  if (wordSet.has(newWord)) {
                      if (newWord === endWord) {
                          result.push([...path, newWord]);
                          found = true;
                      }
                      if (!visited.has(newWord)) {
                          queue.push([...path, newWord]);
                          levelVisited.add(newWord);
                      }
                  }
              }
          }
      }
      for (const word of levelVisited) visited.add(word);
  }
  return result;
}
// Test
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot","dot","dog","lot","log","cog"];
console.log(findLadders(beginWord, endWord, wordList)); // Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
