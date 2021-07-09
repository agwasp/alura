  // GENERAL //
  let xBall = 300;
  let yBall = 200;
  let dBall = 15; // Diametro
  let rBall = dBall / 2; // Raio
  let xVelocityBall = 6;
  let yVelocityBall = 6;
  let wPlayerRacquet = 10; // Comprimento
  let hPlayerRacquet = 90; // Altura
  let colision = false;
  // PLAYER 1 //
  let xPlayer1Racquet = 0;
  let yPlayer1Racquet = 150;
  // PLAYER 2 //
  let xPlayer2Racquet = 585;
  let yPlayer2Racquet = 150;
  let velocityPlayer2;
  let errorChance = 0;
  // SCOREBOARD //
  let player1Points = 0;
  let player2Points = 0;
  // GAME SONGS //
  let points;
  let racquet;
  let song;

  function preload(){
    song = loadSound("songs/song.mp3");
    racquet = loadSound("songs/racquet.mp3");
    points = loadSound("songs/points.mp3");
  }

  function setup() {
    createCanvas(600, 400);
    song.loop();
  }
  
  function draw() {
    background(0);
    
    circle(xBall, yBall, dBall);
    moveBall();
    colisionBorderBall();
    scoreBoard();
    scorePoints();
    
    showRacquet(xPlayer1Racquet, yPlayer1Racquet);
    showRacquet(xPlayer2Racquet, yPlayer2Racquet);
    
    movePlayer1Racquet();
    colisionPlayerRacquet(xPlayer1Racquet, yPlayer1Racquet);
    
    movePlayer2Racquet();
    colisionPlayerRacquet(xPlayer2Racquet, yPlayer2Racquet);
  }
  
  // GENERAL //
  function moveBall () {
    xBall += xVelocityBall;
    yBall += yVelocityBall;
  }
  
  function colisionBorderBall () {
    if (xBall + rBall > width || xBall - rBall < 0) {
      xVelocityBall *= -1;
    }
  
    if (yBall + rBall > height || yBall - rBall < 0) {
      yVelocityBall *= -1;
    }
  }

  function showRacquet(x, y) {
    rect(x, y, wPlayerRacquet, hPlayerRacquet);
  }

  function colisionPlayerRacquet(x, y) {
    colision = collideRectCircle(x, y, wPlayerRacquet, hPlayerRacquet, xBall, yBall, rBall);
    
    if (colision){
      xVelocityBall *= -1;
      racquet.play();
    }
  }

  function scoreBoard(){
    stroke(255);
    textAlign(CENTER);
    textSize(20);
    fill(0,0,255);
    rect(130, 10, 40, 20);
    fill(255);
    text(player1Points, 150, 26);
    fill(0,0,255);
    rect(430, 10, 40, 20);
    fill(255);
    text(player2Points, 450, 26);
  }

  function scorePoints(){
    if (xBall > 590){
      player1Points += 1;
      points.play();
    }
    if (xBall < 10){
      player2Points += 1;
      points.play();
    }
  }

  // PLAYER 1 //
  function movePlayer1Racquet() {
    if (keyIsDown(UP_ARROW)) {
      yPlayer1Racquet -= 10;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      yPlayer1Racquet += 10;
    }
  }

  // function colisionPlayer1Racquet() {
  //   if (xBall - rBall < xPlayer1Racquet + wPlayerRacquet && 
  //       yBall - rBall < yPlayer1Racquet + hPlayerRacquet && 
  //       yBall + rBall > yPlayer1Racquet) {
  //     xVelocityBall *= -1;
  //   }
  // }

  // PLAYER 2 //
  function movePlayer2Racquet() {
    yVelocityPlayer2Racquet = yBall - yPlayer2Racquet - wPlayerRacquet / 2 - 30;
    yPlayer2Racquet += yVelocityPlayer2Racquet + errorChance
    calcErrorChance()
  }

  function calcErrorChance() {
    if (player2Points >= player1Points) {
      errorChance += 1
      if (errorChance >= 39) {
        errorChance = 40
      }
    }
    else {
      errorChance -= 1
      if (errorChance <= 35) {
        errorChance = 35
      }
    }
  }
