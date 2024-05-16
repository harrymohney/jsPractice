class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

class Codec {
  serialize(root) {
      if (!root) return 'null';
      const leftSerialized = this.serialize(root.left);
      const rightSerialized = this.serialize(root.right);
      return root.val + ',' + leftSerialized + ',' + rightSerialized;
  }
  
  deserialize(data) {
      const nodes = data.split(',');
      return this.buildTree(nodes);
  }
  
  buildTree(nodes) {
      const val = nodes.shift();
      if (val === 'null') return null;
      const root = new TreeNode(parseInt(val));
      root.left = this.buildTree(nodes);
      root.right = this.buildTree(nodes);
      return root;
  }
}
