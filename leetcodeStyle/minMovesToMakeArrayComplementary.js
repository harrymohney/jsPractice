function minMoves(nums, limit) {
  const delta = Array(2 * limit + 2).fill(0);
  for (let i = 0; i < nums.length / 2; i++) {
      const a = nums[i];
      const b = nums[nums.length - 1 - i];
      delta[2] += 2;
      delta[Math.min(a, b) + 1]--;
      delta[a + b]--;
      delta[a + b + 1]++;
      delta[Math.max(a, b) + limit + 1]++;
  }
  let curr = 0, minMoves = Number.MAX_SAFE_INTEGER;
  for (let i = 2; i <= 2 * limit; i++) {
      curr += delta[i];
      minMoves = Math.min(minMoves, curr);
  }
  return minMoves;
}
