function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  let row = 0, col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] < target) row++;
      else col--;
  }
  return false;
}
