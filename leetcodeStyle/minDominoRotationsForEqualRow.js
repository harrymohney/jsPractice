function minDominoRotations(A, B) {
  const n = A.length;
  const target = A[0];
  let rotations = Math.min(
      rotationsToMakeSame(A, B, target),
      rotationsToMakeSame(B, A, target)
  );

  if (rotations !== Infinity || A[0] === B[0]) {
      return rotations;
  }

  return -1;
}

function rotationsToMakeSame(A, B, target) {
  let rotations = 0;
  for (let i = 0; i < A.length; i++) {
      if (A[i] !== target && B[i] !== target) {
          return Infinity;
      } else if (A[i] !== target) {
          rotations++;
      }
  }
  return rotations;
}
