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
