const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Variables del juego
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  // Actualiza la posición de la bola
  x += dx;
  y += dy;
}

setInterval(draw, 10);
