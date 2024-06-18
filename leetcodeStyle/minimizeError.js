function minimizeError(prices, target) {
  let floorSum = 0, ceilSum = 0;
  const diffs = [];
  
  for (const price of prices) {
      const floor = Math.floor(price), ceil = Math.ceil(price);
      floorSum += floor;
      ceilSum += ceil;
      if (floor !== ceil) diffs.push(ceil - price);
  }
  
  if (target < floorSum || target > ceilSum) return '-1';
  
  diffs.sort((a, b) => a - b);
  const extraCeils = target - floorSum;
  const roundingError = diffs.slice(0, extraCeils).reduce((acc, d) => acc + d, 0) +
                        diffs.slice(extraCeils).reduce((acc, d) => acc + (1 - d), 0);
  
  return roundingError.toFixed(3);
}
// Test
console.log(minimizeError(["0.700","2.800","4.900"], 8)); // Output: "1.000"
console.log(minimizeError(["1.500","2.500","3.500"], 10)); // Output: "-1"
