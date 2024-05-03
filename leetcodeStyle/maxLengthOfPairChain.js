function findLongestChain(pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  let maxLength = 0;
  let currentEnd = -Infinity;

  for (const pair of pairs) {
      const [start, end] = pair;
      if (start > currentEnd) {
          maxLength++;
          currentEnd = end;
      }
  }

  return maxLength;
}
