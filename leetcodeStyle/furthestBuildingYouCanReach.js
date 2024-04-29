function furthestBuilding(heights, bricks, ladders) {
  const n = heights.length;
  const priorityQueue = new PriorityQueue({ comparator: (a, b) => b - a });
  for (let i = 0; i < n - 1; i++) {
      const diff = heights[i + 1] - heights[i];
      if (diff > 0) {
          priorityQueue.enqueue(diff);
          if (priorityQueue.length > ladders) {
              bricks -= priorityQueue.dequeue();
          }
          if (bricks < 0) {
              return i;
          }
      }
  }
  return n - 1;
}
