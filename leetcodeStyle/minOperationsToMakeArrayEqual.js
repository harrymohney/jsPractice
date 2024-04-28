function minOperations(n) {
  const target = (2 * n - 1) / 2;
  let operations = 0;
  for (let i = 0; i < n / 2; i++) {
      operations += target - (2 * i + 1);
  }
  return operations;
}
