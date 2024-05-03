class MedianFinder {
  constructor() {
      this.minHeap = new PriorityQueue();
      this.maxHeap = new PriorityQueue({ comparator: (a, b) => b - a });
  }

  addNum(num) {
      this.maxHeap.enqueue(num);
      this.minHeap.enqueue(this.maxHeap.dequeue());

      if (this.minHeap.size() > this.maxHeap.size()) {
          this.maxHeap.enqueue(this.minHeap.dequeue());
      }
  }

  findMedian() {
      if (this.maxHeap.size() > this.minHeap.size()) {
          return this.maxHeap.peek();
      } else {
          return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
      }
  }
}
