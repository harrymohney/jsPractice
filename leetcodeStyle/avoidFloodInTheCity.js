function avoidFlood(rains) {
  const ans = Array(rains.length).fill(-1);
  const fullLakes = new Map();
  const dryDays = [];
  for (let i = 0; i < rains.length; i++) {
      if (rains[i] === 0) {
          dryDays.push(i);
          ans[i] = 1;
      } else {
          if (fullLakes.has(rains[i])) {
              const lastRainDay = fullLakes.get(rains[i]);
              const dryDayIndex = binarySearch(dryDays, lastRainDay);
              if (dryDayIndex === -1) return [];
              ans[dryDays[dryDayIndex]] = rains[i];
              dryDays.splice(dryDayIndex, 1);
          }
          fullLakes.set(rains[i], i);
          ans[i] = -1;
      }
  }
  return ans;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
  }
  return left === arr.length ? -1 : left;
}
