class RandomizedCollection {
  constructor() {
      this.list = [];
      this.indexMap = new Map();
  }

  insert(val) {
      this.list.push(val);
      const indexSet = this.indexMap.get(val) || new Set();
      indexSet.add(this.list.length - 1);
      this.indexMap.set(val, indexSet);
      return indexSet.size === 1;
  }

  remove(val) {
      const indexSet = this.indexMap.get(val);
      if (!indexSet || indexSet.size === 0) return false;

      const idxToRemove = indexSet.values().next().value;
      const lastVal = this.list[this.list.length - 1];
      this.list[idxToRemove] = lastVal;

      const lastValIndices = this.indexMap.get(lastVal);
      lastValIndices.delete(this.list.length - 1);
      lastValIndices.add(idxToRemove);

      indexSet.delete(idxToRemove);
      if (indexSet.size === 0) this.indexMap.delete(val);

      this.list.pop();
      return true;
  }

  getRandom() {
      const randIdx = Math.floor(Math.random() * this.list.length);
      return this.list[randIdx];
  }
}
