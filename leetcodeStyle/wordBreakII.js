function wordBreak(s, wordDict) {
  const memo = new Map();
  return backtrack(s, new Set(wordDict), 0, memo);
}

function backtrack(s, wordDict, start, memo) {
  if (start === s.length) return [''];
  if (memo.has(start)) return memo.get(start);
  
  const result = [];
  for (let end = start + 1; end <= s.length; end++) {
      const word = s.substring(start, end);
      if (wordDict.has(word)) {
          const list = backtrack(s, wordDict, end, memo);
          for (let next of list) {
              result.push(word + (next === '' ? '' : ' ') + next);
          }
      }
  }
  memo.set(start, result);
  return result;
}
