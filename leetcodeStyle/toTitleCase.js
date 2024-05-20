function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}
// Test
console.log(toTitleCase("hello world")); // Output: "Hello World"
