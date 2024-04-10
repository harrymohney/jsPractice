function isValidBST(root) {
  const stack = [];
  let prev = null;
  while (root || stack.length > 0) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      if (prev !== null && root.val <= prev.val) return false;
      prev = root;
      root = root.right;
  }
  return true;
}
