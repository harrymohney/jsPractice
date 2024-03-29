function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';
  while (i >= 0 || j >= 0 || carry > 0) {
      const sum = (+a[i] || 0) + (+b[j] || 0) + carry;
      result = (sum % 2) + result;
      carry = sum > 1 ? 1 : 0;
      i--;
      j--;
  }
  return result;
}
