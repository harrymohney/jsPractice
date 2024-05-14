function constructArray(n, k) {
  const res = [];
  let left = 1;
  let right = n;
  
  while (left <= right) {
      if (k > 1) {
          res.push(k % 2 === 0 ? right-- : left++);
          k--;
      } else {
          res.push(left++);
      }
  }
  
  return res;
}
