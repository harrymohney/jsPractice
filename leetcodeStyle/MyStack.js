class MyStack {
  constructor() {
      this.queue1 = [];
      this.queue2 = [];
  }
  push(x) {
      this.queue1.push(x);
  }
  pop() {
      while (this.queue1.length > 1) {
          this.queue2.push(this.queue1.shift());
      }
      const popped = this.queue1.shift();
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
      return popped;
  }
  top() {
      return this.queue1[this.queue1.length - 1];
  }
  empty() {
      return this.queue1.length === 0;
  }
}
// Test
const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.empty()); // Output: false
