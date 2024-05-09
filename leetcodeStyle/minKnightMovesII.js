function minKnightMoves(x, y) {
  const directions = [
      [2, 1], [1, 2], [-1, 2], [-2, 1],
      [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];
  const queue = [[0, 0, 0]];
  const visited = new Set(['0,0']);

  while (queue.length > 0) {
      const [currX, currY, steps] = queue.shift();

      if (currX === x && currY === y) {
          return steps;
      }

      for (const [dx, dy] of directions) {
          const nextX = currX + dx;
          const nextY = currY + dy;
          const key = `${nextX},${nextY}`;

          if (!visited.has(key) && nextX >= -1 && nextY >= -1) {
              visited.add(key);
              queue.push([nextX, nextY, steps + 1]);
          }
      }
  }

  return -1;
}
