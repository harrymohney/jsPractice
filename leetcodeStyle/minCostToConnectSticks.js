function connectSticks(sticks) {
  const minHeap = new MinHeap(sticks);
  let minCost = 0;

  while (minHeap.size() > 1) {
      const first = minHeap.extractMin();
      const second = minHeap.extractMin();
      const sum = first + second;
      minCost += sum;
      minHeap.insert(sum);
  }

  return minCost;
}

class MinHeap {
  constructor(data = []) {
      this.heap = data;
      this.buildHeap();
  }

  size() {
      return this.heap.length;
  }

  parent(i) {
      return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
      return 2 * i + 1;
  }

  rightChild(i) {
      return 2 * i + 2;
  }

  buildHeap() {
      const len = this.size();
      for (let i = Math.floor(len / 2); i >= 0; i--) {
          this.heapifyDown(i);
      }
  }

  heapifyDown(i) {
      const left = this.leftChild(i);
      const right = this.rightChild(i);
      let smallest = i;

      if (left < this.size() && this.heap[left] < this.heap[smallest]) {
          smallest = left;
      }

      if (right < this.size() && this.heap[right] < this.heap[smallest]) {
          smallest = right;
      }

      if (smallest !== i) {
          [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
          this.heapifyDown(smallest);
      }
  }

  heapifyUp(i) {
      while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
          const parent = this.parent(i);
          [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
          i = parent;
      }
  }

  extractMin() {
      if (this.size() === 0) return null;
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.size() > 0) {
          this.heap[0] = last;
          this.heapifyDown(0);
      }
      return min;
  }

  insert(val) {
      this.heap.push(val);
      this.heapifyUp(this.size() - 1);
  }
}
