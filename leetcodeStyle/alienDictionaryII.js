function alienOrder(words) {
  const graph = {};
  const inDegree = {};
  
  for (const word of words) {
      for (const char of word) {
          graph[char] = new Set();
          inDegree[char] = 0;
      }
  }
  
  for (let i = 0; i < words.length - 1; i++) {
      const currWord = words[i];
      const nextWord = words[i + 1];
      const minLength = Math.min(currWord.length, nextWord.length);
      let found = false;
      
      for (let j = 0; j < minLength; j++) {
          const currChar = currWord[j];
          const nextChar = nextWord[j];
          if (currChar !== nextChar) {
              if (!graph[currChar].has(nextChar)) {
                  graph[currChar].add(nextChar);
                  inDegree[nextChar]++;
              }
              found = true;
              break;
          }
      }
      
      if (!found && currWord.length > nextWord.length) {
          return '';
      }
  }
  
  const queue = [];
  for (const char in inDegree) {
      if (inDegree[char] === 0) {
          queue.push(char);
      }
  }
  
  let result = '';
  while (queue.length) {
      const char = queue.shift();
      result += char;
      for (const neighbor of graph[char]) {
          inDegree[neighbor]--;
          if (inDegree[neighbor] === 0) {
              queue.push(neighbor);
          }
      }
  }
  
  return result.length === Object.keys(graph).length ? result : '';
}
