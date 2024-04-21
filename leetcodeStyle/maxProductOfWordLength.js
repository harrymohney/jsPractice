function maxProduct(words) {
  const masks = words.map(word => {
      let mask = 0;
      for (const char of word) {
          mask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
      }
      return mask;
  });
  let maxProduct = 0;
  for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
          if ((masks[i] & masks[j]) === 0) {
              maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
          }
      }
  }
  return maxProduct;
}
