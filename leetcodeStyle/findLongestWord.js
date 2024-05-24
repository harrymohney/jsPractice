function findLongestWord(s, dictionary) {
  let longestWord = '';
  for (const word of dictionary) {
      let i = 0, j = 0;
      while (i < s.length && j < word.length) {
          if (s[i] === word[j]) j++;
          i++;
      }
      if (j === word.length && word.length >= longestWord.length) {
          if (word.length > longestWord.length || word < longestWord) {
              longestWord = word;
          }
      }
  }
  return longestWord;
}
// Test
console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // Output: "apple"
