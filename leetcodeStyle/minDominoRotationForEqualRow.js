function minDominoRotations(A, B) {
  const n = A.length;
  const count = Array(7).fill(0);
  for (let i = 0; i < n; i++) {
      count[A[i]]++;
      count[B[i]]++;
  }
  let target = -1;
  for (let i = 1; i <= 6; i++) {
      if (count[i] >= n) {
          target = i;
          break;
      }
  }
  if (target === -1) return -1;
  let rotateA = 0, rotateB = 0;
  for (let i = 0; i < n; i++) {
      if (A[i] !== target && B[i] !== target) return -1;
      if (A[i] !== target) rotateA++;
      if (B[i] !== target) rotateB++;
  }
  return Math.min(rotateA, rotateB);
}
