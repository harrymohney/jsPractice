function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  function backtrack(start) {
      if (memo.has(start)) return memo.get(start);
      if (start === s.length) return [''];

      const results = [];
      for (let end = start + 1; end <= s.length; end++) {
          const word = s.substring(start, end);
          if (wordSet.has(word)) {
              const restSentences = backtrack(end);
              for (const sentence of restSentences) {
                  results.push((sentence === '' ? '' : ' ') + word + sentence);
              }
          }
      }

      memo.set(start, results);
      return results;
  }

  return backtrack(0);
}
