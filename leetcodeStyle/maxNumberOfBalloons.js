function maxNumberOfBalloons(text) {
  const count = {};
  for (const char of text) {
      if ('balon'.includes(char)) count[char] = (count[char] || 0) + 1;
  }
  return Math.floor(Math.min(count['b'] || 0, count['a'] || 0, count['l'] / 2 || 0, count['o'] / 2 || 0, count['n'] || 0));
}
// Test
console.log(maxNumberOfBalloons("nlaebolko")); // Output: 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // Output: 2
