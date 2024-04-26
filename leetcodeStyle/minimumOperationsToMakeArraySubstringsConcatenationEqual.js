function maxConsecutiveAnswers(answerKey, k) {
  let max = 0;
  let left = 0;
  let right = 0;
  let maxFreq = 0;
  const freq = { T: 0, F: 0 };
  while (right < answerKey.length) {
      freq[answerKey[right]]++;
      maxFreq = Math.max(maxFreq, freq[answerKey[right]]);
      while (right - left + 1 - maxFreq > k) {
          freq[answerKey[left]]--;
          left++;
      }
      max = Math.max(max, right - left + 1);
      right++;
  }
  return max;
}
