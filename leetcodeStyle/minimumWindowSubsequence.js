function minWindow(S, T) {
  let minLength = Infinity;
  let start = -1;
  let i = 0;
  let j = 0;
  while (i < S.length) {
      if (S[i] === T[j]) {
          j++;
          if (j === T.length) {
              let end = i + 1;
              j--;
              while (j >= 0) {
                  if (S[i] === T[j]) j--;
                  i--;
              }
              i++;
              j++;
              if (end - i < minLength) {
                  minLength = end - i;
                  start = i;
              }
          }
      }
      i++;
  }
  return minLength === Infinity ? '' : S.substr(start, minLength);
}
