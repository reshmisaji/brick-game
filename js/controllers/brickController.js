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

const createBrick = function(document, brickPreferences) {
  let brick = createElement(document, "button", brickPreferences.id, "brick");
  return brick;
};

const addBricks = function(document, screen) {
  let brickPreferences = new Bricks(96, 25, 3);
  let bricks = brickPreferences.createBricks();
  let createBrickElement = createBrick.bind(null, document);
  let brickElements = bricks.map(createBrickElement);

  let brickBlock = createElement(document, "div", "brickBlock", "bricks");
  brickBlock.style.width = 96 * Math.floor(960 / 96) + "px";
  brickBlock.style.height = 25 * 3 + "px";
  screen.appendChild(brickBlock);

  for (let index = 0; index < brickElements.length; index++) {
    brickBlock.appendChild(brickElements[index]);
    applyElementPreferences(document, bricks[index], brickElements[index].id);
  }
  return bricks;
};

const initialiseScreen = function() {
  let screen = getElement(document, "gameWindow");
  let brickPreferences = addBricks(document, screen);
  let startButton = addStartButton(screen);
  let paddlePreferences = addPaddle(document, screen);
  let ballPreferences = addBall(document, screen);
  startButton.onclick = startGame.bind(
    null,
    document,
    ballPreferences,
    paddlePreferences,
    brickPreferences
  );
  screen.onkeydown = getKeyEvents.bind(null, document, paddlePreferences);
};

window.onload = initialiseScreen;
