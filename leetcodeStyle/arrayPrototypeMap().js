Array.prototype.customMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
// Test
const arr = [1, 2, 3];
const mappedArr = arr.customMap(item => item * 2);
console.log(mappedArr); // Output: [2, 4, 6]
