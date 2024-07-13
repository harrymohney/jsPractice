class MinStack {
  constructor() {
      this.stack = [];
      this.minStack = [];
  }
  push(x) {
      this.stack.push(x);
      if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) this.minStack.push(x);
  }
  pop() {
      if (this.stack.pop() === this.minStack[this.minStack.length - 1]) this.minStack.pop();
  }
  top() {
      return this.stack[this.stack.length - 1];
  }
  getMin() {
      return this.minStack[this.minStack.length - 1];
  }
}
// Test
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2
