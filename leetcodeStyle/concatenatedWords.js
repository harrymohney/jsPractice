function findAllConcatenatedWordsInADict(words) {
  const wordSet = new Set(words);
  const result = [];

  for (const word of words) {
      if (canForm(word, wordSet)) {
          result.push(word);
      }
  }

  return result;
}

function canForm(word, wordSet) {
  if (wordSet.size === 0) return false;
  const dp = Array(word.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= word.length; i++) {
      for (let j = 0; j < i; j++) {
          if (dp[j] && wordSet.has(word.substring(j, i))) {
              dp[i] = true;
              break;
          }
      }
  }

  return dp[word.length];
}
