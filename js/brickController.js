addPixelSuffix = dimension => dimension + "px";

getElement = (document, elementId) => document.getElementById(elementId);

const getKeyEvents = function(document, paddlePreferences) {
  if (event.key == "ArrowRight") paddlePreferences.moveRight();
  if (event.key == "ArrowLeft") paddlePreferences.moveLeft();
  applyElementPreferences(document, paddlePreferences, "paddle_1");
};

const applyElementPreferences = function(
  document,
  applyElementPreferences,
  elementId
) {
  let element = getElement(document, elementId);
  element.style.width = addPixelSuffix(applyElementPreferences.width);
  element.style.height = addPixelSuffix(applyElementPreferences.height);
  element.style.marginTop = addPixelSuffix(applyElementPreferences.positionOfY);
  element.style.marginLeft = addPixelSuffix(
    applyElementPreferences.positionOfX
  );
};

const createElement = function(document, elementId, elementClass) {
  let element = document.createElement("div");
  element.id = elementId;
  element.className = elementClass;
  return element;
};

const addPadle = function(document, screen) {
  let paddlePreferences = new Paddle(100, 30, 630, 430, 10);
  let paddle = createElement(document, "paddle_1", "paddle");
  screen.appendChild(paddle);
  applyElementPreferences(document, paddlePreferences, "paddle_1");
  screen.onkeydown = getKeyEvents.bind(null, document, paddlePreferences);
};

const addBall = function(document, screen) {
  let ballPreferences = new Ball(30, 600, 460, 10);
  let ball = createElement(document, "ball_1", "ball");
  screen.appendChild(ball);
  applyElementPreferences(document, ballPreferences, "ball_1");
};

const initialiseScreen = function() {
  let screen = getElement(document, "gameWindow");
  screen.focus();
  addPadle(document, screen);
  addBall(document, screen);
};

window.onload = initialiseScreen;
