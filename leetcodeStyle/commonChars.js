function commonChars(A) {
  const result = A[0].split('');
  for (let i = 1; i < A.length; i++) {
      const current = A[i].split('');
      for (let j = 0; j < result.length; j++) {
          if (!current.includes(result[j])) {
              result.splice(j, 1);
              j--;
          } else {
              current.splice(current.indexOf(result[j]), 1);
          }
      }
  }
  return result;
}
// Test
console.log(commonChars(["bella","label","roller"])); // Output: ["e","l","l"]
