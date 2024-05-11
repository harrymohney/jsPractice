function getSkyline(buildings) {
  const events = [];

  for (const [left, right, height] of buildings) {
      events.push([left, height, 'start']);
      events.push([right, height, 'end']);
  }

  events.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[2] === 'start' && b[2] === 'start') return b[1] - a[1];
      if (a[2] === 'end' && b[2] === 'end') return a[1] - b[1];
      if (a[2] === 'start' && b[2] === 'end') return -1;
      if (a[2] === 'end' && b[2] === 'start') return 1;
  });

  const result = [];
  const heightHeap = new MaxHeap();

  for (const [x, height, type] of events) {
      if (type === 'start') {
          if (height > heightHeap.peek()) {
              result.push([x, height]);
          }
          heightHeap.push(height);
      } else {
          heightHeap.remove(height);
          if (height > heightHeap.peek()) {
              result.push([x, heightHeap.peek()]);
          }
      }
  }

  return result;
}

class MaxHeap {
  constructor() {
      this.heap = [];
  }

  push(val) {
      this.heap.push(val);
      this.heapifyUp();
  }

  pop() {
      const max = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.heapifyDown();
      }
      return max;
  }

  peek() {
      return this.heap[0];
  }

  remove(val) {
      const index = this.heap.indexOf(val);
      if (index >= 0) {
          this.heap[index] = this.heap[this.heap.length - 1];
          this.heap.pop();
          if (index < this.heap.length) {
              this.heapifyDown(index);
          }
      }
  }

  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          const parent = Math.floor((index - 1) / 2);
          if (this.heap[index] > this.heap[parent]) {
              [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
              index = parent;
          } else {
              break;
          }
      }
  }

  heapifyDown(index = 0) {
      const length = this.heap.length;
      const element = this.heap[index];
      while (true) {
          let leftChild = 2 * index + 1;
          let rightChild = 2 * index + 2;
          let swap = null;

          if (leftChild < length && this.heap[leftChild] > element) {
              swap = leftChild;
          }
          if (rightChild < length && this.heap[rightChild] > element && this.heap[rightChild] > this.heap[leftChild]) {
              swap = rightChild;
          }

          if (swap === null) break;
          [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
          index = swap;
      }
  }
}
