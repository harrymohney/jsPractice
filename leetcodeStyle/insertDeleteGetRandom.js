class RandomizedCollection {
  constructor() {
      this.arr = [];
      this.map = new Map();
  }
  
  insert(val) {
      this.arr.push(val);
      if (!this.map.has(val)) {
          this.map.set(val, new Set());
      }
      this.map.get(val).add(this.arr.length - 1);
      return this.map.get(val).size === 1;
  }
  
  remove(val) {
      if (!this.map.has(val) || this.map.get(val).size === 0) {
          return false;
      }
      
      const idxToRemove = this.map.get(val).values().next().value;
      const lastElement = this.arr[this.arr.length - 1];
      this.arr[idxToRemove] = lastElement;
      
      this.map.get(val).delete(idxToRemove);
      this.map.get(lastElement).delete(this.arr.length - 1);
      
      if (idxToRemove !== this.arr.length - 1) {
          this.map.get(lastElement).add(idxToRemove);
      }
      
      this.arr.pop();
      return true;
  }
  
  getRandom() {
      const randomIdx = Math.floor(Math.random() * this.arr.length);
      return this.arr[randomIdx];
  }
}
