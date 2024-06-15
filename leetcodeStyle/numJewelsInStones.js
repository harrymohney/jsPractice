function numJewelsInStones(J, S) {
  const setJ = new Set(J);
  let count = 0;
  for (const stone of S) {
      if (setJ.has(stone)) count++;
  }
  return count;
}
// Test
console.log(numJewelsInStones("aA", "aAAbbbb")); // Output: 3
