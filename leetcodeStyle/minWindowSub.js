function minWindow(S, T) {
  const m = S.length;
  const n = T.length;
  let minLen = Infinity;
  let start = -1;
  let i = 0;
  let j = 0;
  
  while (i < m) {
      if (S[i] === T[j]) {
          j++;
          if (j === n) {
              let end = i + 1;
              j--;
              while (j >= 0) {
                  if (S[i] === T[j]) j--;
                  i--;
              }
              i++;
              j++;
              const currentLen = end - i;
              if (currentLen < minLen) {
                  minLen = currentLen;
                  start = i;
              }
          }
      }
      i++;
  }
  
  return start === -1 ? '' : S.substr(start, minLen);
}
