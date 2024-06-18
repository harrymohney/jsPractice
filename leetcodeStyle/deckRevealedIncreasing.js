function deckRevealedIncreasing(deck) {
  deck.sort((a, b) => a - b);
  const result = [];
  while (deck.length) {
      if (result.length) result.unshift(result.pop());
      result.unshift(deck.pop());
  }
  return result;
}
// Test
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7])); // Output: [2,13,3,11,5,17,7]
