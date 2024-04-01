function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootVal = preorder.shift();
  const rootIndex = inorder.indexOf(rootVal);
  const rootNode = new TreeNode(rootVal);
  rootNode.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex));
  rootNode.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1));
  return rootNode;
}
