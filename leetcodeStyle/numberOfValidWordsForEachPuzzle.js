function findNumOfValidWords(words, puzzles) {
  const wordCount = new Map();

  for (const word of words) {
      let mask = 0;
      for (const char of word) {
          mask |= (1 << (char.charCodeAt(0) - 'a'.charCodeAt(0)));
      }
      wordCount.set(mask, (wordCount.get(mask) || 0) + 1);
  }

  const result = [];

  for (const puzzle of puzzles) {
      let total = 0;
      const puzzleMask = (1 << (puzzle[0].charCodeAt(0) - 'a'.charCodeAt(0)));

      let subset = puzzleMask;
      let curr = subset;

      while (true) {
          if (wordCount.has(curr)) {
              total += wordCount.get(curr);
          }

          if (curr === 0) break;

          curr = (curr - 1) & subset;
      }

      result.push(total);
  }

  return result;
}
