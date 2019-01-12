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
      this.positionOfX = add(this.positionOfX, this.speed);
  }

  moveLeft() {
    if (isInsideLeftEnd(this.positionOfX))
      this.positionOfX = subtract(this.positionOfX, this.speed);
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
