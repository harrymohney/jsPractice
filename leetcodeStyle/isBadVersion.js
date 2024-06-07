var solution = function(isBadVersion) {
  return function(n) {
      let left = 1, right = n;
      while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (isBadVersion(mid)) right = mid;
          else left = mid + 1;
      }
      return left;
  };
};
// Test
const isBadVersion = (version) => version >= 4;
const findFirstBadVersion = solution(isBadVersion);
console.log(findFirstBadVersion(5)); // Output: 4
