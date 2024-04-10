function cloneGraph(node) {
  if (!node) return null;
  const visited = new Map();
  const cloneNode = (oldNode) => {
      if (!oldNode) return null;
      if (visited.has(oldNode.val)) return visited.get(oldNode.val);
      const newNode = new Node(oldNode.val);
      visited.set(oldNode.val, newNode);
      for (let neighbor of oldNode.neighbors) {
          newNode.neighbors.push(cloneNode(neighbor));
      }
      return newNode;
  };
  return cloneNode(node);
}
