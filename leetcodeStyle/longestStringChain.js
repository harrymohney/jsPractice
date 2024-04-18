function longestStrChain(words) {
  const dp = {};
  let maxChainLength = 1;
  words.sort((a, b) => a.length - b.length);
  for (const word of words) {
      let longest = 1;
      for (let i = 0; i < word.length; i++) {
          const predecessor = word.slice(0, i) + word.slice(i + 1);
          longest = Math.max(longest, (dp[predecessor] || 0) + 1);
      }
      dp[word] = longest;
      maxChainLength = Math.max(maxChainLength, longest);
  }
  return maxChainLength;
}
