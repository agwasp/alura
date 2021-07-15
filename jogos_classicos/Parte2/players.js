let xPlayer = [100, 200, 300];
let yPlayer = [366, 366, 366];
let player1W = 30;
let player1H = 30;

// SCOREBOARD //
let player1Points = 0;

function showPlayer() {
  for (let i = 0; i < playerImages.length; i++){
    image(playerImages[i], xPlayer[i], yPlayer[i], player1W, player1H);
  }
}

// Make function of other players too
function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    yPlayer[0] -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yPlayer[0] += 3;
  }
}
