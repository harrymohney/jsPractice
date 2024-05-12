function maxEnvelopes(envelopes) {
  envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  const dp = [];
  for (const [_, h] of envelopes) {
      const idx = binarySearch(dp, h);
      if (idx === dp.length) dp.push(h);
      else dp[idx] = h;
  }

  return dp.length;
}

function binarySearch(arr, target) {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid;
  }
  return lo;
}
