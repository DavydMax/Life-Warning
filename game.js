
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 100, y: 100,
  w: 40, h: 40,
  color: "blue",
  level: 1,
  xp: 0,
  class: "Juvenil",
  speed: 3,
};

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp": player.y -= player.speed; break;
    case "ArrowDown": player.y += player.speed; break;
    case "ArrowLeft": player.x -= player.speed; break;
    case "ArrowRight": player.x += player.speed; break;
  }
});

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}
gameLoop();
