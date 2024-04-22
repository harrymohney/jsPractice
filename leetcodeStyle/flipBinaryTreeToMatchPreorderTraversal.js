function flipMatchVoyage(root, voyage) {
  const flipped = [];
  let index = 0;
  const preorder = (node) => {
      if (!node || flipped.length === 1) return;
      if (node.val !== voyage[index++]) {
          flipped.length = 1;
          flipped.push(-1);
          return;
      }
      if (node.left && node.left.val !== voyage[index]) {
          flipped.push(node.val);
          preorder(node.right);
          preorder(node.left);
      } else {
          preorder(node.left);
          preorder(node.right);
      }
  };
  preorder(root);
  return flipped;
}
