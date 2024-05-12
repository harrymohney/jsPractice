function kSmallestPairs(nums1, nums2, k) {
  const minHeap = new MinHeap();

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
      for (let j = 0; j < Math.min(nums2.length, k); j++) {
          const sum = nums1[i] + nums2[j];
          if (minHeap.size() < k) {
              minHeap.push([-sum, i, j]);
          } else {
              if (-sum > minHeap.peek()[0]) break;
              minHeap.pop();
              minHeap.push([-sum, i, j]);
          }
      }
  }

  const result = [];
  while (!minHeap.isEmpty() && result.length < k) {
      const [_, i, j] = minHeap.pop();
      result.push([nums1[i], nums2[j]]);
  }

  return result;
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

  isEmpty() {
      return this.heap.length === 0;
  }

  size() {
      return this.heap.length;
  }

  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          const parent = Math.floor((index - 1) / 2);
          if (this.heap[index][0] < this.heap[parent][0]) {
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

          if (leftChild < length && this.heap[leftChild][0] < element[0]) {
              swap = leftChild;
          }
          if (rightChild < length && this.heap[rightChild][0] < element[0] && this.heap[rightChild][0] < this.heap[leftChild][0]) {
              swap = rightChild;
          }

          if (swap === null) break;
          [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
          index = swap;
      }
  }
}
