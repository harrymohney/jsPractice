function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  } else {
      return root;
  }
}
