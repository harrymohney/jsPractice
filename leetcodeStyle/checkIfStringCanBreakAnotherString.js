function checkIfCanBreak(s1, s2) {
  const sortedS1 = s1.split('').sort().join('');
  const sortedS2 = s2.split('').sort().join('');
  let canBreakS1 = true;
  let canBreakS2 = true;
  for (let i = 0; i < s1.length; i++) {
      if (sortedS1[i] < sortedS2[i]) {
          canBreakS1 = false;
      }
      if (sortedS2[i] < sortedS1[i]) {
          canBreakS2 = false;
      }
      if (!canBreakS1 && !canBreakS2) return false;
  }
  return true;
}
