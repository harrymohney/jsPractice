function addStrings(num1, num2) {
  let carry = 0, result = '';
  let i = num1.length - 1, j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry) {
      const sum = (parseInt(num1[i--] || '0') + parseInt(num2[j--] || '0') + carry);
      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);
  }

  return result;
}
// Test
console.log(addStrings("11", "123")); // Output: "134"
