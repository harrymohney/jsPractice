Array.prototype.customReduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
          accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
          accumulator = this[i];
      }
  }
  return accumulator;
};
// Test
const arr = [1, 2, 3, 4];
const sum = arr.customReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
