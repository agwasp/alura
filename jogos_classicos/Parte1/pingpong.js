function setup() {
    createCanvas(600, 400);
}

let xBall = 300;
let yBall = 200;
let dBall = 15;
let xVelocityBall = 6;
let yVelocityBall = 6;

function draw() {
    background(0);
    circle(xBall, yBall, dBall);
    xBall += xVelocityBall;
    yBall += yVelocityBall;
}
