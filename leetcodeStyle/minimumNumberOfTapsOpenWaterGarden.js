function minTaps(n, ranges) {
  const maxRange = new Array(n + 1).fill(0);
  for (let i = 0; i < ranges.length; i++) {
      const [left, right, cover] = ranges[i];
      const start = Math.max(0, left - cover);
      const end = Math.min(n, left + cover);
      maxRange[start] = Math.max(maxRange[start], end);
  }

  let taps = 0;
  let end = 0;
  let farthest = 0;

  for (let i = 0; i < n; i++) {
      farthest = Math.max(farthest, maxRange[i]);
      if (i === end) {
          if (farthest <= i) return -1;
          taps++;
          end = farthest;
      }
  }

  return taps;
}
