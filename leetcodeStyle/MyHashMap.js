class MyHashMap {
  constructor() {
      this.map = new Array(1000001).fill(-1);
  }
  put(key, value) {
      this.map[key] = value;
  }
  get(key) {
      return this.map[key];
  }
  remove(key) {
      this.map[key] = -1;
  }
}
// Test
const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1)); // Output: 1
console.log(hashMap.get(3)); // Output: -1
hashMap.put(2, 1);
console.log(hashMap.get(2)); // Output: 1
hashMap.remove(2);
console.log(hashMap.get(2)); // Output: -1
