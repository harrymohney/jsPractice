function minAreaFreeRect(points) {
  const n = points.length;
  const pointSet = new Set(points.map(([x, y]) => `${x},${y}`));
  let minArea = Infinity;
  for (let i = 0; i < n; i++) {
      const [x1, y1] = points[i];
      for (let j = 0; j < n; j++) {
          if (i === j) continue;
          const [x2, y2] = points[j];
          for (let k = 0; k < n; k++) {
              if (i === k || j === k) continue;
              const [x3, y3] = points[k];
              const x4 = x2 + x3 - x1;
              const y4 = y2 + y3 - y1;
              if (pointSet.has(`${x4},${y4}`)) {
                  const area = Math.abs((x2 - x1) * (y3 - y1));
                  minArea = Math.min(minArea, area);
              }
          }
      }
  }
  return minArea === Infinity ? 0 : minArea;
}
