// GENERAL //
let backgroundImage;
// GAME SONGS //
let colision;
let points;
let song;
// SCOREBOARD //
let player1Points = 0;
// PLAYER 1 //
let player1Image;
let player1X = 100;
let player1Y = 366;
let player1W = 30;
let player1H = 30;
// CARS //
let carGreen1;
let carGreen2;
let carBlack1;
let carBlack2;
let carYellow1;
let carYellow2;
let carGreen1X = 600;
let carGreen2X = 600;
let carBlack1X = 600;
let carBlack2X = 600;
let carYellow1X = 600;
let carYellow2X = 600;
let carW = 30;
let carH = 30;
let carGreen1Velocity = 2.2;
let carGreen2Velocity = 2.8;
let carBlack1Velocity = 3.2;
let carBlack2Velocity = 3.5;
let carYellow1Velocity = 3;
let carYellow2Velocity = 2.5;

function preload(){
  colision = loadSound("songs/colision.mp3");
  points = loadSound("songs/points.wav");
  song = loadSound("songs/song.mp3");
  backgroundImage = loadImage("images/highway.png");
  player1Image = loadImage("images/player1.png");
  carGreen1 = loadImage("images/carGreen1.png");
  carGreen2 = loadImage("images/carGreen2.png");
  carBlack1 = loadImage("images/carBlack1.png");
  carBlack2 = loadImage("images/carBlack2.png");
  carYellow1 = loadImage("images/carYellow1.png");
  carYellow2 = loadImage("images/carYellow2.png");
}

function setup() {
  createCanvas(500, 400);
  //song.loop();
}

function draw() {
  background(backgroundImage);
  showPlayer(player1Image, player1X, player1Y, player1W, player1H);
  showPlayer(carGreen1, carGreen1X, 325, carW, carH);
  showPlayer(carBlack1, carBlack1X, 270, carW, carH);
  showPlayer(carYellow1, carYellow1X, 215, carW, carH);
  showPlayer(carGreen2, carGreen2X, 155, carW, carH);
  showPlayer(carBlack2, carBlack2X, 100, carW, carH);
  showPlayer(carYellow2, carYellow2X, 45, carW, carH);
  movePlayer1();
  moveCars();
}

// GENERAL //
function showPlayer(img, x, y, w, h) {
  image(img, x, y, w, h);
}

// CARS //
function moveCars(){
  carGreen1X -= carGreen1Velocity;
  carGreen2X -= carGreen2Velocity;
  carBlack1X -= carBlack1Velocity;
  carBlack2X -= carBlack2Velocity;
  carYellow1X -= carYellow1Velocity;
  carYellow2X -= carYellow2Velocity;
}

// PLAYER 1 //
function movePlayer1() {
  if (keyIsDown(UP_ARROW)) {
    player1Y -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    player1Y += 3;
  }
}
