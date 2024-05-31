function strStr(haystack, needle) {
  if (needle === "") return 0;
  return haystack.indexOf(needle);
}
// Test
console.log(strStr("hello", "ll")); // Output: 2
