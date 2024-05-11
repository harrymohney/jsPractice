function minCost(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });
  pq.enqueue([0, 0, 0]);
  const minCost = Array.from({ length: m }, () => Array(n).fill(Infinity));
  minCost[0][0] = 0;

  while (!pq.isEmpty()) {
      const [cost, x, y] = pq.dequeue();

      for (const [dx, dy] of dirs) {
          const nx = x + dx;
          const ny = y + dy;

          if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
              const newCost = cost + (dx === 0 && dy === 0 ? 0 : 1);
              if (newCost < minCost[nx][ny]) {
                  minCost[nx][ny] = newCost;
                  pq.enqueue([newCost, nx, ny]);
              }
          }
      }
  }

  return minCost[m - 1][n - 1];
}

class PriorityQueue {
  constructor(options) {
      this.comparator = options.comparator || ((a, b) => a - b);
      this.elements = [];
  }

  enqueue(element) {
      this.elements.push(element);
      this.heapifyUp();
  }

  dequeue() {
      const min = this.elements[0];
      const end = this.elements.pop();
      if (this.elements.length > 0) {
          this.elements[0] = end;
          this.heapifyDown();
      }
      return min;
  }

  isEmpty() {
      return this.elements.length === 0;
  }

  heapifyUp() {
      let index = this.elements.length - 1;
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.comparator(this.elements[index], this.elements[parentIndex]) < 0) {
              [this.elements[index], this.elements[parentIndex]] = [this.elements[parentIndex], this.elements[index]];
              index = parentIndex;
          } else {
              break;
          }
      }
  }

  heapifyDown() {
      let index = 0;
      const length = this.elements.length;
      const element = this.elements[0];

      while (true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let swapIndex = null;

          if (leftChildIndex < length) {
              if (this.comparator(this.elements[leftChildIndex], element) < 0) {
                  swapIndex = leftChildIndex;
              }
          }

          if (rightChildIndex < length) {
              if (
                  (swapIndex === null && this.comparator(this.elements[rightChildIndex], element) < 0) ||
                  (swapIndex !== null && this.comparator(this.elements[rightChildIndex], this.elements[leftChildIndex]) < 0)
              ) {
                  swapIndex = rightChildIndex;
              }
          }

          if (swapIndex === null) break;

          [this.elements[index], this.elements[swapIndex]] = [this.elements[swapIndex], this.elements[index]];
          index = swapIndex;
      }
  }
}
