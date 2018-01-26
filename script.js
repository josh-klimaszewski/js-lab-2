var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var dmg = 0;

function startCombat() {
  while (wins < 3 && userHealth > 0) {
    if (prompt("attack or quit?") === "attack") {
      userHealth -= getDamage();
      grantHealth -= getDamage();
      console.log (user + " has " + userHealth + " life left!");
      console.log ("Grant the mighty chicken has " + grantHealth + " life left!");
      if (grantHealth < 1) {
        console.log("Grant the mighty chicken died!");
        wins ++;
        grantHealth = 10;
      }
    } else {
      console.log("You ran away!");
      return;
    }
  } if (userHealth < 1) {
    console.log(user + " lost!");
  } else {
    console.log(user + " won!");
  }
}

function startGame() {
  if (prompt("Do you want to play?") === "yes") {
    user = prompt("What's your name?");
    startCombat();
  }
}
function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}


startGame();