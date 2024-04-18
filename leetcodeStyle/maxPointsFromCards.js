function maxScore(cardPoints, k) {
  const n = cardPoints.length;
  let sum = 0;
  for (let i = 0; i < k; i++) {
      sum += cardPoints[i];
  }
  let maxSum = sum;
  for (let i = 0; i < k; i++) {
      sum += cardPoints[n - 1 - i] - cardPoints[k - 1 - i];
      maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
