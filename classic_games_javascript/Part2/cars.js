// CAR ORDER - Green1 / Black1 / Yellow1 / Green2 / Black2 / Yellow2
let xCars = [530, 530, 530, 530, 530, 530];
let yCars = [45, 100, 155, 215, 270, 320];
let wCars = 40;
let hCars = 30;
let velocityCars = [0, 0, 0, 0, 0, 0];
let velocityBoardPosition = [5,3,2.2,1.7,1.4,1.2];
let rndNum = 0;

function showCarPlayer() {
  for (let i = 0; i < carImages.length; i++){
    image(carImages[i], xCars[i], yCars[i], wCars, hCars);
  }
}

function moveCars(){
  for (let i = 0; i < xCars.length; i++){
    if (xCars[i] == 530){
      velocityCars[i] = generateRandomNumber();
    }
    xCars[i] -= velocityCars[i];
    // console.log(`Green1: ${velocityCars[0]} || Black1: ${velocityCars[1]} || Yellow1: ${velocityCars[2]} || Green2: ${velocityCars[3]} || Black2: ${velocityCars[4]} || Yellow2: ${velocityCars[5]}`);
  }
}

function carVelocitiesBoard(){
  for (let i = 0; i < velocityCars.length; i++){
    textAlign(CENTER);
    textSize(25);
    
    switch (velocityCars[i]) {
      case velocityCars[0]:
        fill(color(124,252,0)); // Green
        break;
      case velocityCars[1]:
        fill(color(0,0,0)); // Black
        break;
      case velocityCars[2]:
        fill(color(255,255,0)); // Yellow
        break;
      case velocityCars[3]:
        fill(color(124,252,0)); // Green
        break;
      case velocityCars[4]:
        fill(color(0,0,0)); // Black
        break;
      case velocityCars[5]:
        fill(color(255,255,0)); // Yellow
    }
    
    text(velocityCars[i], width / velocityBoardPosition[i], yCars[i]+15);
  }
}

function fastestCarOnBoard(){
  for (let i = 0; i < velocityCars.length; i++){
    textAlign(CENTER);
    textSize(25);
    
    if (velocityCars[i] >= velocityCars[1] && velocityCars[i] >= velocityCars[2] && velocityCars[i] >= velocityCars[3] && velocityCars[i] >= velocityCars[4] && velocityCars[i] >= velocityCars[5]){
      fill(color(255,0,0)); //red
      text(velocityCars[i], width / velocityBoardPosition[i], yCars[i]+15);
    }
  }
}

function slowestCarOnBoard(){
  for (let i = 0; i < velocityCars.length; i++){
    textAlign(CENTER);
    textSize(25);
    
    if (velocityCars[i] <= velocityCars[1] && velocityCars[i] <= velocityCars[2] && velocityCars[i] <= velocityCars[3] && velocityCars[i] <= velocityCars[4] && velocityCars[i] <= velocityCars[5]){
      fill(color(248,248,255)); // white
      text(velocityCars[i], width / velocityBoardPosition[i], yCars[i]+15);
    }
  }
}

function generateRandomNumber() {
  var minNum = 1.9,
      maxNum = 4.9,
  rndNum = Math.random() * (maxNum - minNum) + minNum;
  var rnd = rndNum.toFixed(1);
  return rnd;
}

function restartOnHighway(){
  for (let i = 0; i < xCars.length; i++){
    if (xCars[i] < -30){
      xCars[i] = 530;
    }
  }
}
