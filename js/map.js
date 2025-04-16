
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const mapImg = new Image();
mapImg.src = "img/modern_map.png";

const playerImg = new Image();
playerImg.src = "img/player_modern.png";

let player = {
    x: 200,
    y: 200,
    speed: 3
};

let keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function update() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mapImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, player.x, player.y, 48, 48);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

mapImg.onload = () => gameLoop();
