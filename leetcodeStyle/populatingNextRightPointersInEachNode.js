function connect(root) {
  if (!root) return root;
  let leftmost = root;
  while (leftmost.left) {
      let head = leftmost;
      while (head) {
          head.left.next = head.right;
          if (head.next) {
              head.right.next = head.next.left;
          }
          head = head.next;
      }
      leftmost = leftmost.left;
  }
  return root;
}
