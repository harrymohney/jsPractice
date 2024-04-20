function getStrongest(arr, k) {
  arr.sort((a, b) => a - b);
  const median = arr[Math.floor((arr.length - 1) / 2)];
  return arr.sort((a, b) => {
      const diffA = Math.abs(a - median);
      const diffB = Math.abs(b - median);
      if (diffA === diffB) return b - a;
      return diffB - diffA;
  }).slice(0, k);
}
