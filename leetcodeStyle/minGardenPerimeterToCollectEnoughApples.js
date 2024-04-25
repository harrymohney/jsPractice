function minimumPerimeter(neededApples) {
  let left = 1;
  let right = Math.pow(neededApples / 4, 1 / 3);
  while (left < right) {
      const mid = Math.ceil((left + right) / 2);
      const apples = (mid * (mid + 1) / 2) * 4;
      if (apples >= neededApples) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  return left * 8;
}
