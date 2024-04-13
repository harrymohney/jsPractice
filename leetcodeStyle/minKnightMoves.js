function minKnightMoves(x, y) {
  const queue = [[0, 0, 0]];
  const visited = new Set(["0,0"]);
  while (queue.length) {
      const [curX, curY, steps] = queue.shift();
      if (curX === x && curY === y) return steps;
      const moves = [
          [1, 2], [2, 1], [2, -1], [1, -2],
          [-1, -2], [-2, -1], [-2, 1], [-1, 2]
      ];
      for (const [dx, dy] of moves) {
          const newX = curX + dx, newY = curY + dy;
          if (!visited.has(`${newX},${newY}`) && newX >= -2 && newY >= -2) {
              queue.push([newX, newY, steps + 1]);
              visited.add(`${newX},${newY}`);
          }
      }
  }
}
