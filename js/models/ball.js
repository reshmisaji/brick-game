class Ball {
  constructor(radius, positionOfY, positionOfX, speedX, speedY) {
    this.height = radius;
    this.width = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.positionOfY = positionOfY;
    this.positionOfX = positionOfX;
  }

  moveBall() {
    this.positionOfX = subtract(this.positionOfX, this.speedX);
    this.positionOfY = subtract(this.positionOfY, this.speedY);
  }

  setBallPreferences() {
    if (this.positionOfX <= 0) {
      this.speedX = -this.speedX;
    }
    if (this.positionOfY <= 0) {
      this.speedY = -this.speedY;
    }
    if (this.positionOfX >= 950) {
      this.speedX = -this.speedX;
    }
    if (this.positionOfY >= 655) {
      this.speedY = -this.speedY;
    }
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
