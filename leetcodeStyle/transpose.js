function transpose(A) {
  return A[0].map((_, i) => A.map(row => row[i]));
}
// Test
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]])); // Output: [[1,4,7],[2,5,8],[3,6,9]]
