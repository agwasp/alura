let xPlayer = 100; //[100, 200];
let yPlayer = 366; //[366, 366];
let wPlayer = 30;
let hPlayer = 30;
let collision = false;
let playerPoints = 0;

function showPlayer() {
  image(playerImage, xPlayer, yPlayer, wPlayer, hPlayer);
}

// Make function for other players too
function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    if (playerMinBorder()){
      yPlayer -= 3;   
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (playerMaxBorder()){
      yPlayer += 3; 
    }
  }
}

function playerMinBorder(){
  return yPlayer > 0;
}

function playerMaxBorder(){
  return yPlayer < 366;
}

function playerCarCollision(){
  for (let i = 0; i < carImages.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xPlayer, yPlayer, 15)

    if (collision){
      collisionSong.play();
      backToBeginning();
      removePoints();
    }
  }
}

function backToBeginning(){
  yPlayer = 366;
}

function scoreboard(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(playerPoints, width / 12, 390);
}

function addPoints(){
  if (yPlayer < 15){
    pointSong.play();
    playerPoints += 1;
    backToBeginning();
  }
}

function removePoints(){
  if (playerPoints > 0){
    playerPoints -= 1;
  }
  else {
    playerPoints == 0;
  }
}
