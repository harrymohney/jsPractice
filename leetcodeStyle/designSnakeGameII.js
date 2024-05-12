class SnakeGame {
  constructor(width, height, food) {
      this.width = width;
      this.height = height;
      this.food = food;
      this.snake = [[0, 0]];
      this.foodIndex = 0;
      this.directions = {
          'U': [-1, 0],
          'D': [1, 0],
          'L': [0, -1],
          'R': [0, 1]
      };
  }

  move(direction) {
      const [dy, dx] = this.directions[direction];
      const [y, x] = this.snake[0];
      const newY = y + dy;
      const newX = x + dx;

      if (newY < 0 || newY >= this.height || newX < 0 || newX >= this.width) {
          return -1; // Game over
      }

      // Check if snake hits itself
      for (let i = 1; i < this.snake.length; i++) {
          const [ny, nx] = this.snake[i];
          if (newY === ny && newX === nx) {
              return -1; // Game over
          }
      }

      // Eat food
      if (this.foodIndex < this.food.length && newY === this.food[this.foodIndex][0] && newX === this.food[this.foodIndex][1]) {
          this.snake.unshift([newY, newX]);
          this.foodIndex++;
      } else {
          this.snake.unshift([newY, newX]);
          this.snake.pop();
      }

      return this.snake.length - 1; // Return score
  }
}
