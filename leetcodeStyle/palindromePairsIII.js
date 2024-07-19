function palindromePairs(words) {
  const result = [];
  const map = new Map();
  for (let i = 0; i < words.length; i++) map.set(words[i], i);
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j <= words[i].length; j++) {
          const str1 = words[i].substring(0, j);
          const str2 = words[i].substring(j);
          if (isPalindrome(str1)) {
              const str2rev = str2.split('').reverse().join('');
              if (map.has(str2rev) && map.get(str2rev) !== i) result.push([map.get(str2rev), i]);
          }
          if (isPalindrome(str2) && str2.length !== 0) {
              const str1rev = str1.split('').reverse().join('');
              if (map.has(str1rev) && map.get(str1rev) !== i) result.push([i, map.get(str1rev)]);
          }
      }
  }
  return result;
}
function isPalindrome(word) {
  let left = 0, right = word.length - 1;
  while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
  }
  return true;
}
// Test
const words = ["abcd","dcba","lls","s","sssll"];
console.log(palindromePairs(words)); // Output: [[0,1],[1,0],[3,2],[2,4]]
