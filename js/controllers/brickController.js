addPixelSuffix = dimension => dimension + "px";

getElement = (document, elementId) => document.getElementById(elementId);

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
