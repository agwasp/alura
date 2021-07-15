function setup() {
  createCanvas(500, 400);
  //song.loop();
}

function draw() {
  background(backgroundImage);
  showPlayer();
  showCarPlayer();
  movePlayer();
  moveCars();
  restartOnHighway();
}
