class Paddle {
  constructor(width, height, positionOfY, positionOfX, color) {
    this.height = height;
    this.width = width;
    this.positionOfY = positionOfY;
    this.positionOfX = positionOfX;
    this.color = color;
  }
}

addPixelSuffix = dimension => dimension + "px";

getElement = (document, elementId) => document.getElementById(elementId);

const applyPaddlePreferences = function(paddlePreferences, paddle_1) {
  paddle_1.style.backgroundColor = paddlePreferences.color;
  paddle_1.style.width = addPixelSuffix(paddlePreferences.width);
  paddle_1.style.height = addPixelSuffix(paddlePreferences.height);
  paddle_1.style.marginTop = addPixelSuffix(paddlePreferences.positionOfY);
  paddle_1.style.marginLeft = addPixelSuffix(paddlePreferences.positionOfX);
};

const initialiseScreen = function() {
  let screen = getElement(document, "screen");
  let paddlePreferences = new Paddle(100, 30, 630, 430, "black");
  let paddle_1 = document.createElement("div");
  screen.appendChild(paddle_1);
  applyPaddlePreferences(paddlePreferences, paddle_1);
};

window.onload = initialiseScreen;
