function minDominoRotations(A, B) {
  function check(x) {
      let rotationsA = 0, rotationsB = 0;
      for (let i = 0; i < A.length; i++) {
          if (A[i] !== x && B[i] !== x) return -1;
          else if (A[i] !== x) rotationsA++;
          else if (B[i] !== x) rotationsB++;
      }
      return Math.min(rotationsA, rotationsB);
  }
  const rotations = check(A[0]);
  if (rotations !== -1 || A[0] === B[0]) return rotations;
  else return check(B[0]);
}
// Test
console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2])); // Output: 2
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4])); // Output: -1
