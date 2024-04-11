function alienOrder(words) {
  const graph = new Map();
  const inDegree = new Map();
  for (const word of words) {
      for (const char of word) {
          graph.set(char, new Set());
          inDegree.set(char, 0);
      }
  }
  for (let i = 0; i < words.length - 1; i++) {
      const currentWord = words[i];
      const nextWord = words[i + 1];
      let minLength = Math.min(currentWord.length, nextWord.length);
      let j = 0;
      while (j < minLength) {
          if (currentWord[j] !== nextWord[j]) {
              if (!graph.get(currentWord[j]).has(nextWord[j])) {
                  graph.get(currentWord[j]).add(nextWord[j]);
                  inDegree.set(nextWord[j], inDegree.get(nextWord[j]) + 1);
              }
              break;
          }
          j++;
      }
  }
  const queue = [];
  for (const [char, degree] of inDegree) {
      if (degree === 0) queue.push(char);
  }
  let result = '';
  while (queue.length > 0) {
      const char = queue.shift();
      result += char;
      for (const neighbor of graph.get(char)) {
          inDegree.set(neighbor, inDegree.get(neighbor) - 1);
          if (inDegree.get(neighbor) === 0) queue.push(neighbor);
      }
  }
  return result.length === graph.size ? result : '';
}
