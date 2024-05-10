function areSentencesSimilarTwo(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;

  const uf = new UnionFind();

  for (const [w1, w2] of pairs) {
      uf.union(w1, w2);
  }

  for (let i = 0; i < words1.length; i++) {
      const w1 = words1[i];
      const w2 = words2[i];
      if (w1 !== w2 && !uf.connected(w1, w2)) {
          return false;
      }
  }

  return true;
}

class UnionFind {
  constructor() {
      this.parent = {};
  }

  find(x) {
      if (this.parent[x] === undefined) {
          this.parent[x] = x;
          return x;
      }
      if (this.parent[x] !== x) {
          this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
  }

  union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
      if (rootX !== rootY) {
          this.parent[rootX] = rootY;
      }
  }

  connected(x, y) {
      return this.find(x) === this.find(y);
  }
}
