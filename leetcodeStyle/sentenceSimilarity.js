function areSentencesSimilarTwo(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;
  
  const uf = new UnionFind();
  for (const [word1, word2] of pairs) {
      uf.union(word1, word2);
  }
  
  for (let i = 0; i < words1.length; i++) {
      const word1 = words1[i];
      const word2 = words2[i];
      if (word1 !== word2 && !uf.connected(word1, word2)) {
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
      if (!this.parent[x]) {
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
