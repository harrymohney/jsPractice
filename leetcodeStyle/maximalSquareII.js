function maximalSquare(matrix) {
  if (matrix.length === 0) return 0;
  let maxSide = 0;
  const dp = Array(matrix.length).fill(null).map(() => Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === '1') {
              if (i === 0 || j === 0) dp[i][j] = 1;
              else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
              maxSide = Math.max(maxSide, dp[i][j]);
          }
      }
  }
  return maxSide * maxSide;
}
// Test
const squareMatrix = [
  ['1','0','1','0','0'],
  ['1','0','1','1','1'],
  ['1','1','1','1','1'],
  ['1','0','0','1','0']
];
console.log(maximalSquare(squareMatrix)); // Output: 4
