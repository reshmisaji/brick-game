class Paddle {
  constructor(width, height, top, left) {
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
  }
}

const addPixelSuffix = function(dimension) {
  return dimension + "px";
};

const createPaddleObject = function(height, width, top, left) {
  height = addPixelSuffix(height);
  width = addPixelSuffix(width);
  left = addPixelSuffix(left);
  top = addPixelSuffix(top);
  return new Paddle(width, height, top, left);
};

const getElement = function(document, elementId) {
  return document.getElementById(elementId);
};

const getPaddlePreferences = function() {
  let height = 30;
  let width = 100;
  let top = 640;
  let left = 380;
  return { height, width, top, left };
};

const createPaddle = function(document) {
  return document.createElement("div");
};

const applyPaddlePreferences = function(paddlePreferences, paddle_1) {
  paddle_1.style.backgroundColor = "black";
  paddle_1.style.width = paddlePreferences.width;
  paddle_1.style.height = paddlePreferences.height;
  paddle_1.style.marginTop = paddlePreferences.top;
  paddle_1.style.marginLeft = paddlePreferences.left;
  return;
};

const getPaddleObject = function() {
  let { height, width, top, left } = getPaddlePreferences();
  return createPaddleObject(height, width, top, left);
};

const initialiseScreen = function() {
  let screen = getElement(document, "screen");
  let paddlePreferences = getPaddleObject();
  let paddle_1 = createPaddle(document);
  screen.appendChild(paddle_1);
  applyPaddlePreferences(paddlePreferences, paddle_1);
};

window.onload = initialiseScreen;
