function areSentencesSimilar(sentence1, sentence2) {
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');
  if (words1.length > words2.length) {
      [words1, words2] = [words2, words1];
  }
  let i = 0;
  while (i < words1.length && words1[i] === words2[i]) {
      i++;
  }
  let j = words1.length - 1;
  while (j >= 0 && words1[j] === words2[j + words2.length - words1.length]) {
      j--;
  }
  return j < i;
}
