class Brick {
  constructor(width, height, positionOfX, positionOfY, id) {
    this.width = width;
    this.height = height;
    this.positionOfX = positionOfX;
    this.positionOfY = positionOfY;
    this.id = id;
  }
}

class Bricks {
  constructor(width, height, numberOfLayers) {
    this.width = width;
    this.height = height;
    this.numberOfLayers = numberOfLayers;
  }
  createBricks() {
    let bricks = [];
    for (let rowIndex = 0; rowIndex < this.numberOfLayers; rowIndex++) {
      for (
        let columnIndex = 0;
        columnIndex < Math.floor(960 / this.width);
        columnIndex++
      ) {
        let id = "brick_" + rowIndex + "_" + columnIndex;
        let brick = new Brick(
          this.width,
          this.height,
          columnIndex * this.width,
          rowIndex * this.height,
          id
        );
        bricks.push(brick);
      }
    }
    return bricks;
  }
}

class Wall {
  constructor(left, right, top, bottom) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
}
