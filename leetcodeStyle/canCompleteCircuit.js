function canCompleteCircuit(gas, cost) {
  let totalTank = 0, currTank = 0, startStation = 0;
  for (let i = 0; i < gas.length; i++) {
      totalTank += gas[i] - cost[i];
      currTank += gas[i] - cost[i];
      if (currTank < 0) {
          startStation = i + 1;
          currTank = 0;
      }
  }
  return totalTank >= 0 ? startStation : -1;
}
// Test
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Output: 3
