function singleNumber(nums) {
  let xor = 0;
  for (let num of nums) {
      xor ^= num;
  }
  const rightmostSetBit = xor & -xor;
  let num1 = 0, num2 = 0;
  for (let num of nums) {
      if ((num & rightmostSetBit) !== 0) {
          num1 ^= num;
      } else {
          num2 ^= num;
      }
  }
  return [num1, num2];
}
