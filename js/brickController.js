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

const startGame = function(document, ballPreferences) {
  getElement(document, "startGame").remove();
  setInterval(function() {
    ballPreferences.moveBall();
    applyElementPreferences(document, ballPreferences, "ball_1");
  }, 100);
};

const createElement = function(document, tagName, elementId, elementClass) {
  let element = document.createElement(tagName);
  element.id = elementId;
  element.className = elementClass;
  return element;
};

const addPaddle = function(document, screen) {
  let paddlePreferences = new Paddle(100, 30, 630, 430, 10);
  let paddle = createElement(document, "div", "paddle_1", "paddle");
  screen.appendChild(paddle);
  applyElementPreferences(document, paddlePreferences, "paddle_1");
  return paddlePreferences;
};

const addBall = function(document, screen) {
  let ballPreferences = new Ball(30, 600, 460, 10);
  let ball = createElement(document, "div", "ball_1", "ball");
  screen.appendChild(ball);
  applyElementPreferences(document, ballPreferences, "ball_1");
  return ballPreferences;
};

const addStartButton = function(screen) {
  let startButton = createElement(
    document,
    "button",
    "startGame",
    "startButton"
  );
  screen.appendChild(startButton);
  startButton.innerHTML = "START GAME";
  return startButton;
};

const initialiseScreen = function() {
  let screen = getElement(document, "gameWindow");
  screen.focus();
  let startButton = addStartButton(screen);
  let paddlePreferences = addPaddle(document, screen);
  let ballPreferences = addBall(document, screen);
  startButton.onclick = startGame.bind(null, document, ballPreferences);
  screen.onkeydown = getKeyEvents.bind(null, document, paddlePreferences);
};

window.onload = initialiseScreen;
