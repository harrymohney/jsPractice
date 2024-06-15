class MovingAverage {
  constructor(size) {
      this.size = size;
      this.queue = [];
      this.sum = 0;
  }

  next(val) {
      if (this.queue.length === this.size) {
          this.sum -= this.queue.shift();
      }
      this.queue.push(val);
      this.sum += val;
      return this.sum / this.queue.length;
  }
}
// Test
const m = new MovingAverage(3);
console.log(m.next(1)); // Output: 1.0
console.log(m.next(10)); // Output: 5.5
console.log(m.next(3)); // Output: 4.66667
console.log(m.next(5)); // Output: 6.0
