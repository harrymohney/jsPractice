function readBinaryWatch(num) {
  const times = [];
  for (let h = 0; h < 12; h++) {
      for (let m = 0; m < 60; m++) {
          if ((h.toString(2) + m.toString(2)).split('1').length - 1 === num) {
              times.push(`${h}:${m < 10 ? '0' : ''}${m}`);
          }
      }
  }
  return times;
}
// Test
console.log(readBinaryWatch(1)); // Output: ["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"]
