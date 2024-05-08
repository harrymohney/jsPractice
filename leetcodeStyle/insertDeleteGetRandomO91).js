class RandomizedSet {
  constructor() {
      this.map = new Map();
      this.array = [];
  }

  insert(val) {
      if (this.map.has(val)) {
          return false;
      }
      this.map.set(val, this.array.length);
      this.array.push(val);
      return true;
  }

  remove(val) {
      if (!this.map.has(val)) {
          return false;
      }
      const index = this.map.get(val);
      const lastElement = this.array[this.array.length - 1];
      this.array[index] = lastElement;
      this.map.set(lastElement, index);
      this.array.pop();
      this.map.delete(val);
      return true;
  }

  getRandom() {
      const randomIndex = Math.floor(Math.random() * this.array.length);
      return this.array[randomIndex];
  }
}
