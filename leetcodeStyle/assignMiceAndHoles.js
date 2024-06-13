function assignMiceAndHoles(mice, holes) {
  mice.sort((a, b) => a - b);
  holes.sort((a, b) => a - b);
  let maxTime = 0;
  for (let i = 0; i < mice.length; i++) {
      maxTime = Math.max(maxTime, Math.abs(mice[i] - holes[i]));
  }
  return maxTime;
}
// Test
console.log(assignMiceAndHoles([4, 2, 7], [1, 3, 8])); // Output: 3
