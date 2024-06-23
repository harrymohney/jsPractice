function numPairsDivisibleBy60(time) {
  const count = new Array(60).fill(0);
  let result = 0;
  for (const t of time) {
      result += count[(60 - t % 60) % 60];
      count[t % 60]++;
  }
  return result;
}
// Test
console.log(numPairsDivisibleBy60([30,20,150,100,40])); // Output: 3
console.log(numPairsDivisibleBy60([60,60,60])); // Output: 3
