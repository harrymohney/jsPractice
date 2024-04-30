function isEscapePossible(blocked, source, target) {
  const MAX_MOVES = 20000; // maximum number of moves allowed
  const blockedSet = new Set(blocked.map(([x, y]) => `${x},${y}`));

  const bfs = (start, end) => {
      const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      const queue = [start];
      const visited = new Set();
      visited.add(`${start[0]},${start[1]}`);
      let steps = 0;

      while (queue.length > 0 && steps < MAX_MOVES) {
          const size = queue.length;
          for (let i = 0; i < size; i++) {
              const [x, y] = queue.shift();
              if (x === end[0] && y === end[1]) return true;
              for (const [dx, dy] of directions) {
                  const nx = x + dx;
                  const ny = y + dy;
                  if (nx >= 0 && nx < 1e6 && ny >= 0 && ny < 1e6 && !blockedSet.has(`${nx},${ny}`) && !visited.has(`${nx},${ny}`)) {
                      visited.add(`${nx},${ny}`);
                      queue.push([nx, ny]);
                  }
              }
          }
          steps++;
      }

      return false;
  };

  return bfs(source, target) && bfs(target, source);
}
