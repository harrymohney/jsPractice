function canReach(arr, start) {
  const visited = new Set();
  const stack = [start];
  while (stack.length > 0) {
      const index = stack.pop();
      if (arr[index] === 0) return true;
      if (!visited.has(index)) {
          visited.add(index);
          if (index + arr[index] < arr.length) stack.push(index + arr[index]);
          if (index - arr[index] >= 0) stack.push(index - arr[index]);
      }
  }
  return false;
}
