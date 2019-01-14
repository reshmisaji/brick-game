const startGame = function(
  document,
  ballPreferences,
  paddlePreferences,
  brickPreferences
) {
  let screen = getElement(document, "gameWindow");
  screen.focus();
  getElement(document, "startGame").remove();
  let interval = setInterval(function() {
    ballPreferences.setBallPreferences(paddlePreferences);
    if (ballPreferences.speedX == 0) {
      gameOver(interval);
    }
    ballPreferences.moveBall();
    applyElementPreferences(document, ballPreferences, "ball_1");
  }, 50);
};

const gameOver = function(interval) {
  alert("gameOver");
  clearInterval(interval);
};
