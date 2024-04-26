function numOfBurgers(tomatoSlices, cheeseSlices) {
  const jumbo = (tomatoSlices - 2 * cheeseSlices) / 2;
  const small = cheeseSlices - jumbo;
  if (jumbo < 0 || small < 0 || jumbo !== Math.floor(jumbo) || small !== Math.floor(small)) {
      return [];
  }
  return [jumbo, small];
}

