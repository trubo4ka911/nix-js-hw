field.style.position = "relative";
ball.style.position = "absolute";
ball.style.transition = "top .5s linear, left .5s linear";

let ballRadius = ball.offsetWidth / 2;
let fieldX = field.offsetLeft + field.clientLeft;
let fieldY = field.offsetTop + field.clientTop;

field.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  if (x < fieldX + ballRadius) {
    x = fieldX + ballRadius;
  }

  if (x > fieldX + field.clientWidth - ballRadius) {
    x = fieldX + field.clientWidth - ballRadius;
  }

  if (y < fieldY + ballRadius) {
    y = fieldY + ballRadius;
  }

  if (y > fieldY + field.clientHeight - ballRadius) {
    y = fieldY + field.clientHeight - ballRadius;
  }

  ball.style.left = x - fieldX - ballRadius + "px";
  ball.style.top = y - fieldY - ballRadius + "px";
});
