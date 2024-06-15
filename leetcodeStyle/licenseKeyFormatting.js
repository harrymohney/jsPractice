function licenseKeyFormatting(S, K) {
  const chars = S.replace(/-/g, '').toUpperCase();
  let result = '';
  let count = 0;
  for (let i = chars.length - 1; i >= 0; i--) {
      if (count === K) {
          result = '-' + result;
          count = 0;
      }
      result = chars[i] + result;
      count++;
  }
  return result;
}
// Test
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // Output: "5F3Z-2E9W"
