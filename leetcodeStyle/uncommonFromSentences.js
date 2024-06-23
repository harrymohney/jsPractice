function uncommonFromSentences(A, B) {
  const count = {};
  for (const word of A.split(' ').concat(B.split(' '))) {
      count[word] = (count[word] || 0) + 1;
  }
  return Object.keys(count).filter(word => count[word] === 1);
}
// Test
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // Output: ["sweet","sour"]
