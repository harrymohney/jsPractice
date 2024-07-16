function alienOrder(words) {
  const graph = {};
  const indegree = {};
  for (const word of words) {
      for (const char of word) {
          graph[char] = [];
          indegree[char] = 0;
      }
  }
  for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i];
      const word2 = words[i + 1];
      if (word1.length > word2.length && word1.startsWith(word2)) return '';
      for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
          if (word1[j] !== word2[j]) {
              graph[word1[j]].push(word2[j]);
              indegree[word2[j]]++;
              break;
          }
      }
  }
  const queue = [];
  for (const char in indegree) {
      if (indegree[char] === 0) queue.push(char);
  }
  let result = '';
  while (queue.length) {
      const char = queue.shift();
      result += char;
      for (const neighbor of graph[char]) {
          indegree[neighbor]--;
          if (indegree[neighbor] === 0) queue.push(neighbor);
      }
  }
  return result.length === Object.keys(graph).length ? result : '';
}
// Test
const alienWords = ["wrt","wrf","er","ett","rftt"];
console.log(alienOrder(alienWords)); // Output: "wertf"
