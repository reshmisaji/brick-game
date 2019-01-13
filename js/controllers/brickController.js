addPixelSuffix = dimension => dimension + "px";

getElement = (document, elementId) => document.getElementById(elementId);

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
