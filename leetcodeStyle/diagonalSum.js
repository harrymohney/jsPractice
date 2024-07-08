function diagonalSum(mat) {
  let sum = 0;
  const n = mat.length;
  for (let i = 0; i < n; i++) {
      sum += mat[i][i]; // primary diagonal
      if (i !== n - i - 1) {
          sum += mat[i][n - i - 1]; // secondary diagonal
      }
  }
  return sum;
}
// Test
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // Output: 25
