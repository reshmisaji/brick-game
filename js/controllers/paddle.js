const getKeyEvents = function(document, paddlePreferences) {
  if (event.key == "ArrowRight") paddlePreferences.moveRight();
  if (event.key == "ArrowLeft") paddlePreferences.moveLeft();
  applyElementPreferences(document, paddlePreferences, "paddle_1");
};

const addPaddle = function(document, screen) {
  let paddlePreferences = new Paddle(100, 30, 630, 430, 10);
  let paddle = createElement(document, "div", "paddle_1", "paddle");
  screen.appendChild(paddle);
  applyElementPreferences(document, paddlePreferences, "paddle_1");
  return paddlePreferences;
};
