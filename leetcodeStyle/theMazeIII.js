function findShortestWay(maze, ball, hole) {
  const dirs = [[0, 1, 'r'], [1, 0, 'd'], [0, -1, 'l'], [-1, 0, 'u']];
  const m = maze.length;
  const n = maze[0].length;
  const queue = [{ pos: ball, dist: 0, path: '' }];
  const visited = new Set();
  const heap = new MinHeap((a, b) => a.dist - b.dist !== 0 ? a.dist - b.dist : a.path.localeCompare(b.path));
  while (queue.length > 0) {
      const { pos, dist, path } = queue.shift();
      if (pos[0] === hole[0] && pos[1] === hole[1]) return path;
      if (visited.has(pos.toString())) continue;
      visited.add(pos.toString());
      for (const [dx, dy, dir] of dirs) {
          let [x, y] = pos;
          let d = 0;
          while (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n && maze[x + dx][y + dy] !== 'W') {
              x += dx;
              y += dy;
              d++;
              if (x === hole[0] && y === hole[1]) break;
          }
          heap.push({ pos: [x, y], dist: dist + d, path: path + dir });
      }
      while (heap.size() > 0 && visited.has(heap.peek().pos.toString())) {
          heap.pop();
      }
      queue.push(...heap.toArray());
      heap.clear();
  }
  return 'impossible';
}

class MinHeap {
  constructor(compare) {
      this.heap = [];
      this.compare = compare;
  }
  push(item) {
      this.heap.push(item);
      this.bubbleUp(this.heap.length - 1);
  }
  pop() {
      if (this.heap.length === 0) return null;
      const root = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.bubbleDown(0);
      }
      return root;
  }
  peek() {
      return this.heap.length === 0 ? null : this.heap[0];
  }
  size() {
      return this.heap.length;
  }
  clear() {
      this.heap = [];
  }
  toArray() {
      return [...this.heap];
  }
  bubbleUp(index) {
      while (index > 0) {
          const parent = Math.floor((index - 1) / 2);
          if (this.compare(this.heap[index], this.heap[parent]) < 0) {
              [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
              index = parent;
          } else {
              break;
          }
      }
  }
  bubbleDown(index) {
      while (index < this.heap.length) {
          let left = index * 2 + 1;
          let right = index * 2 + 2;
          let smallest = index;
          if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
              smallest = left;
          }
          if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
              smallest = right;
          }
          if (smallest !== index) {
              [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
              index = smallest;
          } else {
              break;
          }
      }
  }
}
