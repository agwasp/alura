function setup() {
  createCanvas(500, 400);
  // gameSong.loop();
}

function draw() {
  background(backgroundImage);
  showPlayer();
  showCarPlayer();
  movePlayer();
  moveCars();
  restartOnHighway();
  playerCarCollision();
  scoreboard();
  addPoints();
}
