class MedianFinder {
  constructor() {
      this.minHeap = new MinHeap();
      this.maxHeap = new MaxHeap();
  }

  addNum(num) {
      this.maxHeap.push(num);
      this.minHeap.push(this.maxHeap.pop());
      if (this.minHeap.size > this.maxHeap.size) {
          this.maxHeap.push(this.minHeap.pop());
      }
  }

  findMedian() {
      if (this.maxHeap.size > this.minHeap.size) {
          return this.maxHeap.peek();
      } else {
          return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
      }
  }
}

class MinHeap {
  constructor() {
      this.heap = [];
  }

  push(val) {
      this.heap.push(val);
      this.heapifyUp();
  }

  pop() {
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.heapifyDown();
      }
      return min;
  }

  peek() {
      return this.heap[0];
  }

  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          const parent = Math.floor((index - 1) / 2);
          if (this.heap[index] < this.heap[parent]) {
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

          if (leftChild < length && this.heap[leftChild] < element) {
              swap = leftChild;
          }
          if (rightChild < length && this.heap[rightChild] < element && this.heap[rightChild] < this.heap[leftChild]) {
              swap = rightChild;
          }

          if (swap === null) break;
          [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
          index = swap;
      }
  }
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
