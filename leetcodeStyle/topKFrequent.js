function topKFrequent(nums, k) {
  const count = new Map();
  nums.forEach(num => count.set(num, (count.get(num) || 0) + 1));
  return [...count.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(entry => entry[0]);
}
// Test
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
