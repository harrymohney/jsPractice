function numDecodings(s) {
  if (s[0] === '0') return 0;
  const dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= s.length; i++) {
      if (s[i - 1] !== '0') dp[i] += dp[i - 1];
      if (i > 1 && s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] < '7')) dp[i] += dp[i - 2];
  }
  return dp[s.length];
}
// Test
console.log(numDecodings("226")); // Output: 3
