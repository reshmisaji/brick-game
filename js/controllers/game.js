const startGame = function(document, ballPreferences) {
  getElement(document, "startGame").remove();
  setInterval(function() {
    ballPreferences.setBallPreferences();
    ballPreferences.moveBall();
    applyElementPreferences(document, ballPreferences, "ball_1");
  }, 10);
};
