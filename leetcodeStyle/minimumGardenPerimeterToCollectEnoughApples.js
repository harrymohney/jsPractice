function minimumPerimeter(neededApples) {
  let perimeter = 0;
  let apples = 0;
  let sideLength = 1;

  while (true) {
      apples += 12 * sideLength * sideLength;
      if (apples >= neededApples) {
          return perimeter;
      }
      perimeter += 8 * sideLength;
      sideLength++;
  }
}
