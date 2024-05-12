function minSwap(A, B) {
  const n = A.length;
  let swapCount = 1;
  let fixCount = 0;

  for (let i = 1; i < n; i++) {
      if (A[i - 1] >= B[i] || B[i - 1] >= A[i]) {
          // Need to swap at position i
          let temp = swapCount;
          swapCount = fixCount + 1;
          fixCount = temp;
      } else if (A[i - 1] >= A[i] || B[i - 1] >= B[i]) {
          // Need to fix at position i
          fixCount++;
      } else {
          // No need to do anything at position i
          let min = Math.min(swapCount, fixCount);
          swapCount = min + 1;
          fixCount = min;
      }
  }

  return Math.min(swapCount, fixCount);
}
