function maxDistToClosest(seats) {
  let lastPerson = -1, maxDistance = 0;
  for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 1) {
          if (lastPerson === -1) {
              maxDistance = i;
          } else {
              maxDistance = Math.max(maxDistance, Math.floor((i - lastPerson) / 2));
          }
          lastPerson = i;
      }
  }
  maxDistance = Math.max(maxDistance, seats.length - lastPerson - 1);
  return maxDistance;
}
// Test
console.log(maxDistToClosest([1,0,0,0,1,0,1])); // Output: 2
