function flipAndInvertImage(A) {
  return A.map(row => row.reverse().map(bit => bit ^ 1));
}
// Test
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // Output: [[1,0,0],[0,1,0],[1,1,1]]
