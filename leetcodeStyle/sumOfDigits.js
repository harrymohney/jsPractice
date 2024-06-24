function sumOfDigits(A) {
  const min = Math.min(...A);
  const sum = String(min).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  return sum % 2 === 0 ? 1 : 0;
}
// Test
console.log(sumOfDigits([34,23,1,24,75,33,54,8])); // Output: 0
console.log(sumOfDigits([99,77,33,66,55])); // Output: 1
