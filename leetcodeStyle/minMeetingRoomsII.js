function minMeetingRooms(intervals) {
  if (!intervals.length) return 0;
  const startTimes = intervals.map(i => i[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(i => i[1]).sort((a, b) => a - b);
  let rooms = 0, endPointer = 0;
  for (let i = 0; i < startTimes.length; i++) {
      if (startTimes[i] < endTimes[endPointer]) rooms++;
      else endPointer++;
  }
  return rooms;
}
// Test
const intervals = [[0,30],[5,10],[15,20]];
console.log(minMeetingRooms(intervals)); // Output: 2
