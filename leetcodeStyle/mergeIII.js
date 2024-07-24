function merge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (const interval of intervals) {
      const last = result[result.length - 1];
      if (interval[0] <= last[1]) last[1] = Math.max(last[1], interval[1]);
      else result.push(interval);
  }
  return result;
}
// Test
const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals)); // Output: [[1,6],[8,10],[15,18]]
