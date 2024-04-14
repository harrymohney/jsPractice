function palindromePairs(words) {
  const result = [];
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
      map.set(words[i], i);
  }
  for (let i = 0; i < words.length; i++) {
      const word = words[i];
      for (let j = 0; j <= word.length; j++) {
          const prefix = word.slice(0, j);
          const suffix = word.slice(j);
          if (isPalindrome(prefix)) {
              const reverseSuffix = suffix.split('').reverse().join('');
              if (map.has(reverseSuffix) && map.get(reverseSuffix) !== i) {
                  result.push([map.get(reverseSuffix), i]);
              }
          }
          if (isPalindrome(suffix) && suffix.length > 0) {
              const reversePrefix = prefix.split('').reverse().join('');
              if (map.has(reversePrefix) && map.get(reversePrefix) !== i) {
                  result.push([i, map.get(reversePrefix)]);
              }
          }
      }
  }
  return result;
}

function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
  }
  return true;
}
