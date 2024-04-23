function kthSmallest(mat, k) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < mat.length; i++) {
      left += mat[i][0];
      right += mat[i][mat[i].length - 1];
  }
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const count = countArraysLessThanOrEqualToTarget(mat, mid);
      if (count < k) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return left;
}

function countArraysLessThanOrEqualToTarget(mat, target) {
  let count = 0;
  backtrack(0, 0, 0);
  return count;

  function backtrack(row, sum, elements) {
      if (sum > target) return;
      if (row === mat.length) {
          count++;
          return;
      }
      for (let col = 0; col < mat[row].length; col++) {
          backtrack(row + 1, sum + mat[row][col], elements + 1);
      }
  }
}
