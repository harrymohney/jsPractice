function minDeletions(s) {
  const freq = {};
  for (const char of s) {
      freq[char] = (freq[char] || 0) + 1;
  }
  const freqCount = {};
  let deletions = 0;
  for (const char in freq) {
      const count = freq[char];
      while (freqCount[count]) {
          count--;
          deletions++;
      }
      if (count > 0) freqCount[count] = true;
  }
  return deletions;
}
