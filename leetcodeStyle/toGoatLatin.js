function toGoatLatin(S) {
  const vowels = new Set('aeiouAEIOU');
  return S.split(' ').map((word, index) => {
      const suffix = 'ma' + 'a'.repeat(index + 1);
      return vowels.has(word[0]) ? word + suffix : word.slice(1) + word[0] + suffix;
  }).join(' ');
}
// Test
console.log(toGoatLatin("I speak Goat Latin")); // Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
