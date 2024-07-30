function memoize(fn) {
  const cache = {};
  return function (...args) {
      const key = JSON.stringify(args);
      if (!(key in cache)) {
          cache[key] = fn.apply(this, args);
      }
      return cache[key];
  };
}
// Test
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (from cache)
