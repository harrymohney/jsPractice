function countBits(num) {
  const result = [];
  for (let i = 0; i <= num; i++) {
      result.push(countOnes(i));
  }
  return result;
}

function countOnes(n) {
  let count = 0;
  while (n !== 0) {
      count++;
      n = n & (n - 1);
  }
  return count;
}
