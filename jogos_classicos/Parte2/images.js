let backgroundImage;
let player1Image;
let carGreen1Image;
let carGreen2Image;
let carBlack1Image;
let carBlack2Image;
let carYellow1Image;
let carYellow2Image;

function preload(){
  backgroundImage = loadImage("images/highway.png");
  
  player1Image = loadImage("images/player1.png");
  player2Image = loadImage("images/player2.png");
  player3Image = loadImage("images/player3.jpg");
  playerImages = [player1Image, player2Image, player3Image];
  
  carGreen1Image = loadImage("images/carGreen1.png");
  carGreen2Image = loadImage("images/carGreen2.png");
  carBlack1Image = loadImage("images/carBlack1.png");
  carBlack2Image = loadImage("images/carBlack2.png");
  carYellow1Image = loadImage("images/carYellow1.png");
  carYellow2Image = loadImage("images/carYellow2.png");
  carImages = [carGreen1Image, carBlack1Image, carYellow1Image, carGreen2Image, carBlack2Image, carYellow2Image];
}
