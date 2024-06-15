class RecentCounter {
  constructor() {
      this.requests = [];
  }
  
  ping(t) {
      this.requests.push(t);
      while (this.requests[0] < t - 3000) {
          this.requests.shift();
      }
      return this.requests.length;
  }
}
// Test
const counter = new RecentCounter();
console.log(counter.ping(1));    // Output: 1
console.log(counter.ping(100));  // Output: 2
console.log(counter.ping(3001)); // Output: 3
console.log(counter.ping(3002)); // Output: 3
