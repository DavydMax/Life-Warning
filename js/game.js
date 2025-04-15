
// Inicialização
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 100, y: 100,
  w: 40, h: 40,
  color: "blue",
  level: 1,
  xp: 0,
  class: "Juvenil",
  inventory: [],
  hp: 100
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
  requestAnimationFrame(draw);
}

draw();
