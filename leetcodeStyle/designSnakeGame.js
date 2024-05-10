class SnakeGame {
  constructor(width, height, food) {
      this.width = width;
      this.height = height;
      this.food = food;
      this.snake = [[0, 0]];
      this.score = 0;
  }

  move(direction) {
      const head = this.snake[0];
      const [dx, dy] = direction;

      const newHead = [head[0] + dx, head[1] + dy];

      // Check boundaries
      if (
          newHead[0] < 0 || newHead[0] >= this.height ||
          newHead[1] < 0 || newHead[1] >= this.width
      ) {
          return -1; // Game over
      }

      // Check self collision
      for (let i = 1; i < this.snake.length; i++) {
          if (this.snake[i][0] === newHead[0] && this.snake[i][1] === newHead[1]) {
              return -1; // Game over
          }
      }

      // Check if food is eaten
      if (this.food.length > 0 && this.food[0] === newHead[0] && this.food[1] === newHead[1]) {
          this.score++;
          this.snake.unshift(newHead);
          this.food.shift();
          return this.score;
      }

      // Normal move
      this.snake.unshift(newHead);
      this.snake.pop();
      return this.score;
  }
}
