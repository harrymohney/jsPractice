function minSwap(A, B) {
  let swap = 1, noSwap = 0;
  for (let i = 1; i < A.length; i++) {
      let newSwap = A.length, newNoSwap = A.length;
      if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
          newNoSwap = Math.min(newNoSwap, noSwap);
          newSwap = Math.min(newSwap, swap + 1);
      }
      if (A[i] > B[i - 1] && B[i] > A[i - 1]) {
          newNoSwap = Math.min(newNoSwap, swap);
          newSwap = Math.min(newSwap, noSwap + 1);
      }
      swap = newSwap;
      noSwap = newNoSwap;
  }
  return Math.min(swap, noSwap);
}
