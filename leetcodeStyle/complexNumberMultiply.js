function complexNumberMultiply(a, b) {
  const [aReal, aImaginary] = a.slice(0, -1).split('+').map(Number);
  const [bReal, bImaginary] = b.slice(0, -1).split('+').map(Number);

  const real = aReal * bReal - aImaginary * bImaginary;
  const imaginary = aReal * bImaginary + aImaginary * bReal;

  return `${real}+${imaginary}i`;
}
// Test
console.log(complexNumberMultiply("1+1i", "1+1i")); // Output: "0+2i"
