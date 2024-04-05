function findAnagrams(s, p) {
  const result = [];
  const targetMap = {};
  for (let char of p) {
      targetMap[char] = (targetMap[char] || 0) + 1;
  }
  let left = 0, right = 0, count = p.length;
  while (right < s.length) {
      if (targetMap[s[right]] !== undefined && targetMap[s[right]] > 0) {
          count--;
      }
      if (s[right] in targetMap) {
          targetMap[s[right]]--;
      }
      right++;
      while (count === 0) {
          if (right - left === p.length) {
              result.push(left);
          }
          if (s[left] in targetMap) {
              targetMap[s[left]]++;
              if (targetMap[s[left]] > 0) {
                  count++;
              }
          }
          left++;
      }
  }
  return result;
}
