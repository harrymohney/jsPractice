function countPrimeSetBits(L, R) {
  const isPrime = (n) => {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) return false;
      }
      return true;
  }
  let count = 0;
  for (let i = L; i <= R; i++) {
      const bits = i.toString(2).replace(/0/g, '').length;
      if (isPrime(bits)) count++;
  }
  return count;
}
// Test
console.log(countPrimeSetBits(6, 10)); // Output: 4
console.log(countPrimeSetBits(10, 15)); // Output: 5
