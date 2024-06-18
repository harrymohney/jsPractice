class MyStack {
  constructor() {
      this.queue = [];
  }

  push(x) {
      this.queue.push(x);
      let size = this.queue.length;
      while (size > 1) {
          this.queue.push(this.queue.shift());
          size--;
      }
  }

  pop() {
      return this.queue.shift();
  }

  top() {
      return this.queue[0];
  }

  empty() {
      return this.queue.length === 0;
  }
}
// Test
const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());   // Output: 2
console.log(stack.pop());   // Output: 2
console.log(stack.empty()); // Output: false
