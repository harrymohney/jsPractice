function findLadders(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  
  const result = [];
  const adjList = new Map();
  const distances = new Map();
  bfs();
  dfs(beginWord, [beginWord]);
  return result;
  
  function bfs() {
      const queue = [beginWord];
      distances.set(beginWord, 0);
      while (queue.length > 0) {
          const word = queue.shift();
          const neighbors = getNeighbors(word);
          for (const neighbor of neighbors) {
              if (!distances.has(neighbor)) {
                  distances.set(neighbor, distances.get(word) + 1);
                  queue.push(neighbor);
              }
              if (!adjList.has(neighbor)) adjList.set(neighbor, []);
              adjList.get(neighbor).push(word);
          }
      }
  }
  
  function getNeighbors(word) {
      const neighbors = [];
      const chars = word.split('');
      for (let i = 0; i < chars.length; i++) {
          const originalChar = chars[i];
          for (let j = 0; j < 26; j++) {
              chars[i] = String.fromCharCode(97 + j);
              const newWord = chars.join('');
              if (wordSet.has(newWord)) {
                  neighbors.push(newWord);
              }
          }
          chars[i] = originalChar;
      }
      return neighbors;
  }
  
  function dfs(word, path) {
      if (word === endWord) {
          result.push([...path]);
          return;
      }
      if (!adjList.has(word)) return;
      for (const nextWord of adjList.get(word)) {
          if (distances.get(nextWord) === distances.get(word) + 1) {
              path.push(nextWord);
              dfs(nextWord, path);
              path.pop();
          }
      }
  }
}
