function bitwiseComplement(N) {
  const bitLength = N.toString(2).length;
  const allOnes = (1 << bitLength) - 1;
  return N ^ allOnes;
}
// Test
console.log(bitwiseComplement(5)); // Output: 2
console.log(bitwiseComplement(7)); // Output: 0
