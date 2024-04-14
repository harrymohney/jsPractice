function kthSmallest(matrix, k) {
  const n = matrix.length;
  let left = matrix[0][0], right = matrix[n - 1][n - 1];
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      let count = 0;
      for (let i = 0; i < n; i++) {
          let j = n - 1;
          while (j >= 0 && matrix[i][j] > mid) j--;
          count += (j + 1);
      }
      if (count < k) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return left;
}
