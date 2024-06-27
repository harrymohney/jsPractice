function minTimeToVisitAllPoints(points) {
  let time = 0;
  for (let i = 1; i < points.length; i++) {
      const [x1, y1] = points[i - 1];
      const [x2, y2] = points[i];
      time += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }
  return time;
}
// Test
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])); // Output: 7
