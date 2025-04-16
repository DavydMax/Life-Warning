
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bg = new Image();
bg.src = "img/mapa_realista.png";

const player = new Image();
player.src = "img/player.png";

let playerX = 100;
let playerY = 300;
const speed = 4;

const keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function update() {
    if (keys["ArrowUp"]) playerY -= speed;
    if (keys["ArrowDown"]) playerY += speed;
    if (keys["ArrowLeft"]) playerX -= speed;
    if (keys["ArrowRight"]) playerX += speed;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(player, playerX, playerY, 48, 48);
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

bg.onload = () => loop();
