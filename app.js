
    let players = [{"name": "austin", "score":2, "id":1}, {"name": "kam", "score":0, "id":2}];
    let currentRoller = 0;
    let currentRollResults = [];
    let rollResult = diceRoll();

   
    function diceRoll() {
    
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const sum = dice1 + dice2;
      currentRollResults.push(sum);

    //   currentRollResults.push(dice1 + dice2);
    // currentRollResults.push(rollResult);
    //   return dice1 + dice2;
        // currentRollResults.push(rollResult);
        // resultArray.push(rollResult);
        
        console.log(`(inside log for diceRoll function:You rolled a ${sum}`);
        return sum;
        
        // checkDice();
    }

    function checkDice() {
        if(currentRollResults[0] === "") {
            if(rollResult=== 7 || 11) {
                // this.socre += 1;
                players[currentRoller].score += 1;
                // currentRollResults = 0;
                currentRoller = 0;
                console.log(`${players} won this round they rolled a ${rollResult}`);
            } else if(rollResult === 2 || 3|| 12) {
                players[currentRoller].score -= 1;
                currentRoller = 1;
                console.log(`${players} loss this round they rolled a ${rollResult}`);
                changeTurns();
            } else {
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
            }
        } else {
            if(rollResult === currentRollResults[0]) {
                players[currentRoller].score =+ 1;
                changeTurns();
            } else {
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
            }
        }
        // function changeTurns() {
        //     if(players.length < currentRoller-1) {
        //         currentRoller += 1;
        //     } else {
        //         currentRoller = 0;
        //     }
        // }
    }


   

  

    // diceRoll(currentRollResults);
    // checkDice();

//  We can just use regualr funcitons and we dont need to use a main app component

function changeTurns() {
    if(players.length < currentRoller-1) {
        currentRoller += 1;
    } else {
        currentRoller = 0;
    }
}
// Test for game
let currentPlayerIndex = 0; // Initialize the current player index
// let currentPlayerIndex =  Player.players;
// Create a dice


function playTurn() {
//     const currentPlayer = players[currentPlayerIndex];

//     // Roll the dice and display the result
//     const rollResult = diceRoller.roll();
//     // console.log(`${currentPlayer.name} rolled a ${rollResult}`);
//     console.log(`${players}  rolled a ${rollResult}`);
  
//     // Update the player's score based on the roll result
//     if (currentRollResults[0] === "") {
//     if (rollResult === 7 || rollResult === 11) {
//     //   currentPlayer.score += 1;
//     players[currentRoller].score += 1;
//       currentRoller = 0
//     //   console.log(`${currentPlayer.name} won this round!`);
//     console.log(`${players} won this round they rolled a ${rollResult}`);
//     } else if (rollResult === 2 || rollResult === 3 || rollResult === 12) {
//     //   currentPlayer.score -= 1;
//     players[currentRoller].score -= 1;
//     //   currentRoller = 1;
//     currentRoller = Player.players[1]
//       changeTurns();
//     //   console.log(`${currentPlayer.name} lost this round!`);
//     console.log(`${players} loss this round they rolled a ${rollResult}`);
//     console.log()
//     }  else {
//         currentRollResults.push(rollResult);
//         currentRoller = (currentRoller + 1) % players.length;
//     }
// }  else {
//     if(rollResult === currentRollResults[0]) {
//         players[currentRoller].score =+ 1;
//         changeTurns();
//     } else {
//         currentRollResults.push(rollResult);
//         currentRoller = (currentRoller + 1) % players.length;
//     }
// }
//     // Check if the game is over
//     // if (currentPlayer.score >= 10) {
//         if (players[currentRoller].score >= 10) {
//     //   console.log(`${currentPlayer.name} wins the game!`);
//     console.log(`${players} won this round they rolled a ${rollResult}`);
//       return; // End the game
//     }
  
//     // Switch to the next player
//     currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

//     function changeTurns() {
//         if(players.length < currentRoller-1) {
//             currentRoller += 1;
//         } else {
//             currentRoller = 0;
//         }
//     }
  
//     // Continue the game loop
//     setTimeout(playTurn, 5000); // Adjust the delay as needed (in milliseconds)


const currentPlayer = players[currentPlayerIndex];

  // Roll the dice and display the result
  const rollResult = diceRoller.roll();
  console.log(`${currentPlayer} rolled a ${rollResult}`);

  // Update the player's score based on the roll result
  if (currentRollResults[0] === "") {
    if (rollResult === 7 || rollResult === 11) {
      currentPlayer.score += 1;
      console.log(`${players[currentPlayerIndex]} won this round they rolled a ${rollResult}`);
    } else if (rollResult === 2 || rollResult === 3 || rollResult === 12) {
      currentPlayer.score -= 1;
      console.log(`${players[currentPlayerIndex]} lost this round they rolled a ${rollResult}`);
      changeTurns();
    } else {
      currentRollResults.push(rollResult);
    }
  } else {
    if (rollResult === currentRollResults[0]) {
      currentPlayer.score += 1;
      changeTurns();
    } else {
      currentRollResults.push(rollResult);
    }
  }

  // Check if the game is over
  if (currentRoller.score >= 10) {
    console.log(`${players[currentPlayerIndex]} wins the game!`);
    return; // End the game
  }

  // Switch to the next player
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

  // Continue the game loop
  setTimeout(playTurn, 5000); 
}

// Start the game loop
// playTurn();
// console.log("this is the diceroll function:" ,diceRoll())s
// console.log("This is the currentRollResulet", currentRollResults);
// diceRoll();