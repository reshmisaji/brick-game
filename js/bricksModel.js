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

class Ball {
  constructor(radius, positionOfY, positionOfX, speed) {
    this.height = radius;
    this.width = radius;
    this.speed = speed;
    this.positionOfY = positionOfY;
    this.positionOfX = positionOfX;
  }

  moveBall() {
    this.positionOfX = this.positionOfX - 5;
    this.positionOfY = this.positionOfY - 5;
  }
}

const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const isInsideRightEnd = function(positionOfX) {
  return positionOfX < 860;
};

const isInsideLeftEnd = function(positionOfX) {
  return positionOfX > 0;
};
