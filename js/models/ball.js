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

  

  setBallPreferences(paddlePreferences) {
    if (this.positionOfX <= 0) {
      this.speedX = -this.speedX;
    }
    if (this.positionOfY <= 0) {
      this.speedY = -this.speedY;
    }
    if (this.positionOfX >= 950) {
      this.speedX = -this.speedX;
    }
    if (this.positionOfY >= 650) {
      this.speedY = 0;
      this.speedX = 0;
    }
    if (
      isInPaddle(
        this.positionOfY,
        this.positionOfX,
        paddlePreferences.positionOfX,
        paddlePreferences.positionOfY
      )
    ) {
      this.speedY = -this.speedY;
    }
  }
}

const isInPaddle = function(ballTop, ballLeft, paddleLeft, paddleTop) {
  let paddleWidth = 100;
  let basketHeight = 30;
  return (
    ballTop > paddleTop - basketHeight &&
    ballLeft > paddleLeft &&
    ballLeft < paddleLeft + paddleWidth
  );
};

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
