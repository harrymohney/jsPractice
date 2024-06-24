function numMovesStones(a, b, c) {
  const stones = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = stones;
  const maxMoves = z - x - 2;
  const minMoves = (y - x === 1 && z - y === 1) ? 0 : (y - x <= 2 || z - y <= 2) ? 1 : 2;
  return [minMoves, maxMoves];
}
// Test
console.log(numMovesStones(1, 2, 5)); // Output: [1,2]
console.log(numMovesStones(4, 3, 2)); // Output: [0,0]
