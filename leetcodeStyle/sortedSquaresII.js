function sortedSquares(A) {
  return A.map(x => x * x).sort((a, b) => a - b);
}
// Test
console.log(sortedSquares([-4,-1,0,3,10])); // Output: [0,1,9,16,100]
