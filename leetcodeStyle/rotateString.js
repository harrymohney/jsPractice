function rotateString(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}
// Test
console.log(rotateString("abcde", "cdeab")); // Output: true
