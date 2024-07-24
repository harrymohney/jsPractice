function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0, end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < end) count++;
      else end = intervals[i][1];
  }
  return count;
}
// Test
const intervals = [[1,2],[2,3],[3,4],[1,3]];
console.log(eraseOverlapIntervals(intervals)); // Output: 1
