class TimeMap {
  constructor() {
      this.map = new Map();
  }

  set(key, value, timestamp) {
      if (!this.map.has(key)) {
          this.map.set(key, []);
      }
      this.map.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
      if (!this.map.has(key)) return "";

      const entries = this.map.get(key);

      let low = 0;
      let high = entries.length - 1;

      while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          if (entries[mid][0] > timestamp) {
              high = mid - 1;
          } else {
              low = mid + 1;
          }
      }

      return high === -1 ? "" : entries[high][1];
  }
}
