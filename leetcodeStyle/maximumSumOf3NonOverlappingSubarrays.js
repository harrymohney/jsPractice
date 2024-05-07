function maxSumOfThreeSubarrays(nums, k) {
  const n = nums.length;
  const sums = Array(n + 1).fill(0);
  const left = Array(n).fill(0);
  const right = Array(n).fill(0);
  let maxSum = 0;
  const result = [];

  for (let i = 0; i < n; i++) {
      sums[i + 1] = sums[i] + nums[i];
  }

  let total = sums[k] - sums[0];
  left[k - 1] = total;

  for (let i = k; i < n; i++) {
      const currentSum = sums[i + 1] - sums[i + 1 - k];
      if (currentSum > total) {
          left[i] = currentSum;
          total = currentSum;
      } else {
          left[i] = total;
      }
  }

  total = sums[n] - sums[n - k];
  right[n - k] = total;

  for (let i = n - k - 1; i >= 0; i--) {
      const currentSum = sums[i + k] - sums[i];
      if (currentSum >= total) {
          right[i] = currentSum;
          total = currentSum;
      } else {
          right[i] = total;
      }
  }

  for (let i = k; i <= n - 2 * k; i++) {
      const leftSum = left[i - 1];
      const rightSum = right[i + k];
      const currentSum = sums[i + k] - sums[i] + leftSum + rightSum;
      if (currentSum > maxSum) {
          maxSum = currentSum;
          result[0] = i - k;
          result[1] = i;
          result[2] = i + k;
      }
  }

  return result;
}
