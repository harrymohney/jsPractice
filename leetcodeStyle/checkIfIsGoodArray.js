function isGoodArray(nums) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
      result = gcd(result, nums[i]);
      if (result === 1) return true;
  }
  return result === 1;
}
