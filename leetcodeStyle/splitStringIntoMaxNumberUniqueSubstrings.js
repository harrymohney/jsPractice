function maxUniqueSplit(s) {
  let max = 0;
  const seen = new Set();
  const backtrack = (startIndex) => {
      if (startIndex === s.length) {
          max = Math.max(max, seen.size);
          return;
      }
      for (let i = startIndex + 1; i <= s.length; i++) {
          const substr = s.substring(startIndex, i);
          if (!seen.has(substr)) {
              seen.add(substr);
              backtrack(i);
              seen.delete(substr);
          }
      }
  };
  backtrack(0);
  return max;
}
