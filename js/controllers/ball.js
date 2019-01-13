const addBall = function(document, screen) {
  let ballPreferences = new Ball(30, 600, 460, 10, 10);
  let ball = createElement(document, "div", "ball_1", "ball");
  screen.appendChild(ball);
  applyElementPreferences(document, ballPreferences, "ball_1");
  return ballPreferences;
};
