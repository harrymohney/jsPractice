function pancakeSort(arr) {
  const result = [];
  for (let target = arr.length; target > 0; target--) {
      let index = arr.indexOf(target);
      if (index === target - 1) continue;
      if (index !== 0) {
          result.push(index + 1);
          arr = arr.slice(0, index + 1).reverse().concat(arr.slice(index + 1));
      }
      result.push(target);
      arr = arr.slice(0, target).reverse().concat(arr.slice(target));
  }
  return result;
}
