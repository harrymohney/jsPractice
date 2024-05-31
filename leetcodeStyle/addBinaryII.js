function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';
  while (i >= 0 || j >= 0) {
      const sum = carry + (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0);
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
  }
  return carry ? '1' + result : result;
}
// Test
console.log(addBinary("11", "1")); // Output: "100"
