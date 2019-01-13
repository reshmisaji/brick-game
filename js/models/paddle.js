class Paddle {
  constructor(width, height, positionOfY, positionOfX, speed) {
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.positionOfY = positionOfY;
    this.positionOfX = positionOfX;
  }

  moveRight() {
    if (isInsideRightEnd(this.positionOfX))
      return (this.positionOfX = add(this.positionOfX, this.speed));
  }

  moveLeft() {
    if (isInsideLeftEnd(this.positionOfX))
      return (this.positionOfX = subtract(this.positionOfX, this.speed));
  }
}
