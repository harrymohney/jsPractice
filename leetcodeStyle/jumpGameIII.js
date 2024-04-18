function canReach(arr, start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length) {
      const index = queue.shift();
      if (arr[index] === 0) return true;
      const forward = index + arr[index];
      const backward = index - arr[index];
      if (forward < arr.length && !visited.has(forward)) {
          visited.add(forward);
          queue.push(forward);
      }
      if (backward >= 0 && !visited.has(backward)) {
          visited.add(backward);
          queue.push(backward);
      }
  }
  return false;
}
