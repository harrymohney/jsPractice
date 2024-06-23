function fib(N) {
  if (N === 0) return 0;
  if (N === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= N; i++) {
      [a, b] = [b, a + b];
  }
  return b;
}
// Test
console.log(fib(2)); // Output: 1
console.log(fib(3)); // Output: 2
console.log(fib(4)); // Output: 3
