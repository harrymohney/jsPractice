function merge(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
      const last = result[result.length - 1];
      if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
      else result.push(intervals[i]);
  }
  return result;
}
// Test
const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals)); // Output: [[1,6],[8,10],[15,18]]