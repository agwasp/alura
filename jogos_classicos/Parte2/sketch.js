// GENERAL //
let backgroundImage;
let carGreen1;
let carGreen2;
let carBlack1;
let carBlack2;
let carYellow1;
let carYellow2;
// PLAYER 1 //
let player1Image;
// GAME SONGS //
let colision;
let points;
let song;
// SCOREBOARD //
let player1Points = 0;

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
  image(player1Image, 100, 366, 30, 30);
  image(carGreen1, 450, 325, 30, 30);
  image(carBlack1, 450, 270, 30, 30);
  image(carYellow1, 450, 215, 30, 30);
  image(carGreen2, 450, 155, 30, 30);
  image(carBlack2, 450, 100, 30, 30);
  image(carYellow2, 450, 45, 30, 30);
}
