function setup() {
    createCanvas(600, 400);
  }
  
  let xBall = 300;
  let yBall = 200;
  let dBall = 20;
  let rBall = dBall / 2;
  let xVelocityBall = 5;
  let yVelocityBall = 5;
  
  let xPlayer1Racquet = 5;
  let yPlayer1Racquet = 150;
  let wPlayer1Racquet = 10;
  let hPlayer1Racquet = 90;
  
  let xPlayer2Racquet = 580;
  let yPlayer2Racquet = 150;
  let wPlayer2Racquet = 10;
  let hPlayer2Racquet = 90;
  
  function draw() {
    background(0);
    circle(xBall, yBall, dBall);
    rect(xPlayer1Racquet, yPlayer1Racquet, wPlayer1Racquet, hPlayer1Racquet);
    rect(xPlayer2Racquet, yPlayer2Racquet, wPlayer2Racquet, hPlayer2Racquet);
    
    changeBallVelocity();
    changeBallDirection();
    movePlayer1Racquet();
    colisionPlayer1Racquet();
  }
  
  function changeBallVelocity () {
    xBall += xVelocityBall;
    yBall += yVelocityBall;
  }
  
  function changeBallDirection () {
    if (xBall + rBall > width || xBall - rBall < 0) {
      xVelocityBall *= -1;
    }
  
    if (yBall + rBall > height || yBall - rBall < 0) {
      yVelocityBall *= -1;
    }
  }
  
  function movePlayer1Racquet() {
    if (keyIsDown(UP_ARROW)) {
      yPlayer1Racquet -= 10;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      yPlayer1Racquet += 10;
    }
  }
  
  function colisionPlayer1Racquet() {
    if (xBall - rBall < xPlayer1Racquet + wPlayer1Racquet && yBall - rBall < yPlayer1Racquet + hPlayer1Racquet && yBall + rBall > yPlayer1Racquet) {
      xVelocityBall *= -1;
    }
  }