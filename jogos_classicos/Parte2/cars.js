// CAR ORDER - Green1 / Black1 / Yellow1 / Green2 / Black2 / Yellow2
let xCars = [530, 530, 530, 530, 530, 530];
let yCars = [45, 100, 155, 215, 270, 325];
let wCars = 30;
let hCars = 30;
let velocityCars = [0, 0, 0, 0, 0, 0];
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
    console.log("Green1: " + velocityCars[0],
                "Black1: " + velocityCars[1],
                "Yellow1: " + velocityCars[2],
                "Green2: " + velocityCars[3],
                "Black2: " + velocityCars[4],
                "Yellow2: " + velocityCars[5]);
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
