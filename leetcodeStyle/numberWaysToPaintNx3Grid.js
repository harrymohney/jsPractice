function numOfWays(n) {
  const mod = 10 ** 9 + 7;
  let twoColor = 6;
  let threeColor = 6;
  for (let i = 2; i <= n; i++) {
      const prevTwoColor = twoColor;
      twoColor = (2 * twoColor + 3 * threeColor) % mod;
      threeColor = (2 * prevTwoColor + 2 * threeColor) % mod;
  }
  return (twoColor + threeColor) % mod;
}
