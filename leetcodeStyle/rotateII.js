function rotate(nums, k) {
  k = k % nums.length;
  nums.reverse();
  function reverseSubarray(start, end) {
      while (start < end) {
          [nums[start], nums[end]] = [nums[end], nums[start]];
          start++;
          end--;
      }
  }
  reverseSubarray(0, k - 1);
  reverseSubarray(k, nums.length - 1);
}
// Test
const rotateArray = [1,2,3,4,5,6,7];
rotate(rotateArray, 3);
console.log(rotateArray); // Output: [5,6,7,1,2,3,4]
