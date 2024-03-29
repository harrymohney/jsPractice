function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
      const current = intervals[i];
      const previous = merged[merged.length - 1];
      if (current[0] <= previous[1]) {
          previous[1] = Math.max(current[1], previous[1]);
      } else {
          merged.push(current);
      }
  }
  return merged;
}
