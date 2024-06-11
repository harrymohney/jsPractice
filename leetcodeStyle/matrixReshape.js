function matrixReshape(mat, r, c) {
  const flat = mat.flat();
  if (r * c !== flat.length) return mat;
  const reshaped = [];
  for (let i = 0; i < r; i++) {
      reshaped.push(flat.slice(i * c, (i + 1) * c));
  }
  return reshaped;
}
// Test
console.log(matrixReshape([[1,2],[3,4]], 1, 4)); // Output: [[1, 2, 3, 4]]
