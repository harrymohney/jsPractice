function kthSmallest(root, k) {
  const stack = [];
  let current = root;
  while (current || stack.length) {
      while (current) {
          stack.push(current);
          current = current.left;
      }
      current = stack.pop();
      k--;
      if (k === 0) return current.val;
      current = current.right;
  }
}
