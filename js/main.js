class Paddle {
  constructor(document, width, height) {
    let paddle = document.createElement("div");
    paddle.id = "paddle";
    paddle.style.width = width;
    paddle.style.height = height;
    paddle.style.backgroundColor = "black";
    return paddle;
  }
}

window.onload = () => {
  let paddle = new Paddle(document, "100px", "30px");
  let screen = document.getElementById("screen");
  screen.appendChild(paddle);
};
