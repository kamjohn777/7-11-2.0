
let players = [{name: "austin", score:2, id:1}, {name: "kam", score:0, id:2}];
let currentRoller = 0;
let currentRollResults = [];
let rollResult = 0;
let establishedPoint = [null, null];
let point = [4,5,6,8,9,10];
let isFirstRoll = true;

function checkDice() {
    console.log('here')
}


// DICE ROLL FUNCTION SECTION
// This is creating each random dice roll 2 dice from 1-6 and adds the two sums together
function diceRoll() {

  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const sum = dice1 + dice2;
  currentRollResults.push(sum);    
  rollResult = sum;
  console.log(rollResult);
  checkDice();
  return rollResult;
    }
console.log(rollResult);
// END OF DICE ROLL FUNCTION SECTION

// THE START OF SWITCHPLAYER FUNCTION SWITCHES PLAYERS
// If current player is one then it set it to 0 and if 0 it sets it to 1
// function switchPlayer(currentPlayerName) {
//     if (currentPlayerName === players[0].name) {
//         currentRoller = 1;
//         currentRollResults = [];
//         checkDice();
//       return players[1].name;
//     } else if (currentPlayerName === players[1].name) {
//         currentRoller = 0;
//         currentRollResults = [];
//         checkDice();
//       return players[0].name;
//     } else {
//       // Handle the case where the provided name is not one of the player names.
//       return currentPlayerName;
//     }
// }
// Initialize a flag to track the first roll of the player's turn


function switchPlayer(currentPlayerName) {
if (currentPlayerName === players[0].name) {
    if(currentRollResults[0] === 2 || currentRollResults[0] === 3 || currentRollResults[0] === 12) {
        currentRoller = 1;
    } 
} else if (currentPlayerName === players[1].name) {
    if(currentRollResults[0] === 2 || currentRollResults[0] === 3 || currentRollResults[0] === 12) {
        currentRoller = 0;
    } 
} else {
    // Handle the case where the provided name is not one of the player names.
    return currentPlayerName;
}

if (isFirstRoll) {
    currentRollResults = [];
    const rollResult = diceRoll(); // Roll the dice
    console.log(`Rolled: ${rollResult}`); // Print the rolled result

    // Check for craps conditions (2, 3, or 12) on the first roll
    if (rollResult === 2 || rollResult === 3 || rollResult === 12) {
        players[currentRoller].score -= 1; // Player loses a point
        console.log(`${players[currentRoller].name} rolled a ${rollResult} (craps) and loses 1 point. Score: ${players[currentRoller].score}`);
        isFirstRoll = false;
    } else {
           // If the first player didn't roll a craps condition,
            // reset the isFirstRoll flag for the next player's turn
            isFirstRoll = true;
    }
}
console.log(`This is the current player: ${players[currentRoller].name}`);
return players[currentRoller].name;
}

// THE END OF SWITCH PLAYER FUNCTION
console.log(`this is the ${switchPlayer(players[currentRoller].name)}`);
