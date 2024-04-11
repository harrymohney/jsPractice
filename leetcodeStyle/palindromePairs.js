function palindromePairs(words) {
  const isPalindrome = (str) => {
      let left = 0, right = str.length - 1;
      while (left < right) {
          if (str[left] !== str[right]) return false;
          left++;
          right--;
      }
      return true;
  };
  const wordMap = new Map();
  const result = [];
  for (let i = 0; i < words.length; i++) {
      wordMap.set(words[i], i);
  }
  for (let i = 0; i < words.length; i++) {
      const word = words[i];
      for (let j = 0; j <= word.length; j++) {
          const prefix = word.substring(0, j);
          const suffix = word.substring(j);
          if (isPalindrome(prefix)) {
              const reversedSuffix = suffix.split('').reverse().join('');
              if (wordMap.has(reversedSuffix) && wordMap.get(reversedSuffix) !== i) {
                  result.push([wordMap.get(reversedSuffix), i]);
              }
          }
          if (suffix !== '' && isPalindrome(suffix)) {
              const reversedPrefix = prefix.split('').reverse().join('');
              if (wordMap.has(reversedPrefix) && wordMap.get(reversedPrefix) !== i) {
                  result.push([i, wordMap.get(reversedPrefix)]);
              }
          }
      }
  }
  return result;
}
