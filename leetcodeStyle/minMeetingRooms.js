function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0;
  const startTimes = intervals.map(interval => interval[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(interval => interval[1]).sort((a, b) => a - b);
  let rooms = 0, endIdx = 0;
  for (let i = 0; i < intervals.length; i++) {
      if (startTimes[i] < endTimes[endIdx]) {
          rooms++;
      } else {
          endIdx++;
      }
  }
  return rooms;
}
// Test
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // Output: 2
