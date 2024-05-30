function climbStairs(n) {
  if (n <= 2) return n;
  let prev1 = 1, prev2 = 2;
  for (let i = 3; i <= n; i++) {
      const temp = prev1 + prev2;
      prev1 = prev2;
      prev2 = temp;
  }
  return prev2;
}
// Test
console.log(climbStairs(3)); // Output: 3
