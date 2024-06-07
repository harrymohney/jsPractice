function addDigits(num) {
  while (num >= 10) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}
// Test
console.log(addDigits(38)); // Output: 2
