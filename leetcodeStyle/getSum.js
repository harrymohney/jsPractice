function getSum(a, b) {
  while (b != 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
  }
  return a;
}
// Test
console.log(getSum(3, 5)); // Output: 8
