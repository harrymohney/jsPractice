function climbStairs(n) {
  if (n === 1) return 1;
  let first = 1, second = 2;
  for (let i = 3; i <= n; i++) {
      const third = first + second;
      first = second;
      second = third;
  }
  return second;
}
// Test
console.log(climbStairs(3)); // Output: 3
