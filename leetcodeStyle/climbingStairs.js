function climbStairs(n) {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) {
      let temp = b;
      b += a;
      a = temp;
  }
  return b;
}
