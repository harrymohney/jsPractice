function longestMountain(A) {
  const n = A.length;
  if (n < 3) return 0;
  let longest = 0;
  
  for (let i = 1; i < n - 1; i++) {
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
          let left = i - 1, right = i + 1;
          while (left > 0 && A[left] > A[left - 1]) left--;
          while (right < n - 1 && A[right] > A[right + 1]) right++;
          longest = Math.max(longest, right - left + 1);
      }
  }
  return longest;
}
// Test
console.log(longestMountain([2,1,4,7,3,2,5])); // Output: 5
