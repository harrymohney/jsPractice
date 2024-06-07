class MyHashSet {
  constructor() {
      this.set = new Array(1000001).fill(false);
  }
  add(key) {
      this.set[key] = true;
  }
  remove(key) {
      this.set[key] = false;
  }
  contains(key) {
      return this.set[key];
  }
}
// Test
const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1)); // Output: true
console.log(hashSet.contains(3)); // Output: false
hashSet.add(2);
console.log(hashSet.contains(2)); // Output: true
hashSet.remove(2);
console.log(hashSet.contains(2)); // Output: false
