let backgroundImage;
let player1Image;
let player2Image;
let carGreenImage;
let carBlackImage;
let carYellowImage;
let collisionSong;
let pointSong;
let gameSong;

function preload(){
  backgroundImage = loadImage("images/highway.png");
  
  collisionSong = loadSound("songs/colision.mp3");
  pointSong = loadSound("songs/points.wav");
  gameSong = loadSound("songs/song.mp3");
  
  playerImage = loadImage("images/player.png");
  
  carGreenImage = loadImage("images/carGreen.png");
  carBlackImage = loadImage("images/carBlack.png");
  carYellowImage = loadImage("images/carYellow.png");
  carImages = [carGreenImage, carBlackImage, carYellowImage, carGreenImage, carBlackImage, carYellowImage];
}
