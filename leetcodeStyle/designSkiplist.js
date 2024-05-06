class Skiplist {
  constructor() {
      this.head = new Node(-Infinity);
  }

  search(target) {
      let curr = this.head;

      while (curr) {
          while (curr.next && curr.next.val < target) {
              curr = curr.next;
          }
          if (curr.next && curr.next.val === target) return true;
          curr = curr.down;
      }

      return false;
  }

  add(num) {
      const stack = [];
      let curr = this.head;

      while (curr) {
          while (curr.next && curr.next.val < num) {
              curr = curr.next;
          }
          stack.push(curr);
          curr = curr.down;
      }

      let insertUp = true;
      let down = null;

      while (insertUp && stack.length > 0) {
          curr = stack.pop();
          curr.next = new Node(num, curr.next, down);
          down = curr.next;
          insertUp = Math.random() < 0.5;
      }

      if (insertUp) {
          this.head = new Node(-Infinity, null, this.head);
      }
  }

  erase(num) {
      let curr = this.head;
      let found = false;

      while (curr) {
          while (curr.next && curr.next.val < num) {
              curr = curr.next;
          }
          if (curr.next && curr.next.val === num) {
              found = true;
              curr.next = curr.next.next;
          }
          curr = curr.down;
      }

      return found;
  }
}

class Node {
  constructor(val = 0, next = null, down = null) {
      this.val = val;
      this.next = next;
      this.down = down;
  }
}
