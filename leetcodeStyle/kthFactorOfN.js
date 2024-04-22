function kthFactor(n, k) {
  const factors = [];
  for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
          factors.push(i);
          if (i !== n / i) {
              factors.push(n / i);
          }
      }
  }
  factors.sort((a, b) => a - b);
  return k <= factors.length ? factors[k - 1] : -1;
}
