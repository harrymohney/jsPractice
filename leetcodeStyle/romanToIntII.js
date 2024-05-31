function romanToInt(s) {
  const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
      if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
          result -= romanMap[s[i]];
      } else {
          result += romanMap[s[i]];
      }
  }
  return result;
}
// Test
console.log(romanToInt("MCMXCIV")); // Output: 1994
