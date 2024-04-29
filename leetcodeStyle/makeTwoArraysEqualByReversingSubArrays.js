function canBeEqual(target, arr) {
  const count = {};
  for (const num of target) {
      count[num] = (count[num] || 0) + 1;
  }
  for (const num of arr) {
      if (!count[num]) return false;
      count[num]--;
  }
  return true;
}
