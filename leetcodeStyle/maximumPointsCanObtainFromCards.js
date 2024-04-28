function maxScore(cardPoints, k) {
  const n = cardPoints.length;
  const windowSize = n - k;
  let currentWindowSum = 0;
  let minWindowSum = Infinity;
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
      totalSum += cardPoints[i];
      currentWindowSum += cardPoints[i];
      if (i >= windowSize) {
          currentWindowSum -= cardPoints[i - windowSize];
      }
      if (i >= windowSize - 1) {
          minWindowSum = Math.min(minWindowSum, currentWindowSum);
      }
  }
  return totalSum - minWindowSum;
}
