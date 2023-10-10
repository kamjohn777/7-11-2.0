
    let players = [{name: "austin", score:2, id:1}, {name: "kam", score:0, id:2}];
    let currentRoller= 0;
    let currentRollResults = [];
    let rollResult = 0;
    let establishedPoint = [null, null];
    let point = [4,5,6,8,9,10];
    let isFirstRoll = true;
    /*const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    let diceSum = dice1 + dice2;
    try usinf these variables instead of making a whole funciton for the dice*/


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
        currentRoller = 1;
    } else if (currentPlayerName === players[1].name) {
        currentRoller = 0;
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
        }

        isFirstRoll = false; // Mark the first roll as completed
    }

    return players[currentRoller].name;
}

    // THE END OF SWITCH PLAYER FUNCTION
console.log(`this is the ${switchPlayer()}`)

    // switchPlayer(currentRoller);

    console.log("This is the switch player function:", switchPlayer(players[currentRoller].name), 'This is the current roller: ', currentRoller);
    function checkDice() {
        let result = '';
    
        if (currentRollResults[0]) {
            console.log("test1:");
    
            // Check if the current player has an established point
            if (establishedPoint[currentRoller] === null) {
                console.log("test2:");
    
                // Check for automatic win or loss on the first roll
                switch (rollResult) {
                    case 7:
                    case 11:
                        console.log("test6:");
                        players[currentRoller].score += 1;
                        console.log(`${players[currentRoller].name} won this round they rolled a ${rollResult}`);
                        return result = `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`;
    
                    case 2:
                    case 3:
                    case 12:
                        console.log("test7:");
                        players[currentRoller].score -= 1;
                        switchPlayer();
                        console.log(`${players[currentRoller].name} loss this round they rolled a ${rollResult}`);
                        return result = `${players[currentRoller].name} loss this round they rolled a ${rollResult} ${players[currentRoller].name}'s turn is over`;
    
                    default:
                        console.log("test8:");
                        // Set the established point for the current player
                        establishedPoint[currentRoller] = rollResult;
                        console.log(`${players[currentRoller].name} established a point: ${rollResult}`);
                        // Since an established point is set, we don't return a result yet
                }
    
                // Check for automatic win after handling the special cases
                if (currentRollResults[0] === 7 || currentRollResults[0] === 11) {
                    console.log("test10:");
                    players[currentRoller].score += 1;
                    console.log(`${players[currentRoller].name} won this round they rolled a ${currentRollResults[0]}`);
                    return result = `${players[currentRoller].name} won this round they rolled a ${currentRollResults[0]} ${players[currentRoller].name} rolls again`;
                }
            } else {
                console.log("test9:");
    
                // Handle the case when an established point exists (normal gameplay)
                switch (rollResult) {
                    // Check if the player rolled their established point
                    case establishedPoint[currentRoller]:
                        console.log("test3:");
                        players[currentRoller].score += 1;
                        console.log(`${players[currentRoller].name} won this round by rolling the point ${rollResult}`);
                        console.log(`${players[currentRoller].name} rolls again`);
                        establishedPoint[currentRoller] = null; // Reset the established point
                        switchPlayer();
                        return result = `${players[currentRoller].name} won this round by rolling the point ${rollResult} ${players[currentRoller].name} rolls again`;
    
                    case 7:
                        console.log("test4:");
                        players[currentRoller].score -= 1;
                        establishedPoint[currentRoller] = null; // Reset the established point
                        console.log(`${players[currentRoller].name} rolled a 7 before rolling the point. They lose play`);
                        console.log(`${players[currentRoller].name}'s turn is over`);
                        switchPlayer();
                        return result = `${players[currentRoller].name} rolled a 7 before rolling the point ${players[currentRoller].name}'s turn is over`;
    
                    default:
                        console.log("test5:");
                        console.log(`${players[currentRoller].name} is rolling for the point ${establishedPoint[currentRoller]}`);
                        // Check if the roll matches the established point or 7
                        if (rollResult === establishedPoint[currentRoller] || rollResult === 7) {
                            // Handle the case where the player either rolled their point or a 7
                            if (rollResult === establishedPoint[currentRoller]) {
                                console.log("test11:");
                                players[currentRoller].score += 1;
                                console.log(`${players[currentRoller].name} won this round by rolling the point ${rollResult}`);
                                console.log(`${players[currentRoller].name} rolls again`);
                                establishedPoint[currentRoller] = null; // Reset the established point
                            } else {
                                console.log("test12:");
                                players[currentRoller].score -= 1;
                                establishedPoint[currentRoller] = null; // Reset the established point
                                console.log(`${players[currentRoller].name} rolled a 7 before rolling the point. They lose play`);
                                console.log(`${players[currentRoller].name}'s turn is over`);
                                switchPlayer();
                            }
                            // switchPlayer();
                            return result = `${players[currentRoller].name} rolled ${rollResult}. ${players[currentRoller].name}'s turn is over`;
                        }
                }
            }
        }
    
        console.log(result);
        return result;
    }
    

function simulateGame() {
    // Initialize game state if needed
    currentRoller = 0;
    currentRollResults = [];
    rollResult = 0;
    establishedPoint = [null, null]; // Initialize an array for established points
    players = [{ name: "austin", score: 2, id: 1 }, { name: "kam", score: 0, id: 2 }];
    // okay Idea for round maybe create a function for round that knows what a round should look like and how it ends
    let rounds = 10;
    let result = null;
  
    // Simulate the game by making a series of dice rolls and checking the results
    for (let i = 0; i < rounds; i++) {
      console.log(`Round ${i + 1}`);
      console.log("Next player: " + switchPlayer(players[currentRoller].name));
      
      diceRoll(); // Roll the dice
      console.log(`Rolled: ${rollResult}`); // Print the rolled result
      
       result = checkDice(); // Check the result of the current player's turn
      console.log("Result:", result); // Print the result of the turn
    }
    return result
  }



     // Get references to the button and result elements
     const rollButton = document.getElementById('roll-btn-div');
     const resultElement = document.getElementById('result');

     let rolling = false;

     // Add a click event listener to the button
     rollButton.addEventListener('click', function () {
         if (!rolling) {
             rolling = true;
             rollButton.disabled = true; // Disable the button during the roll
             rollButton.textContent = 'Rolling...';
             const interval = setInterval(function () {
                 const rollResult = diceRoll();
                 resultElement.textContent = `${players[currentRoller].name} You rolled a ${rollResult}!`;
             }, 500); // Change the interval as desired (in milliseconds)

             // Stop rolling after a few seconds (e.g., 3 seconds in this example)
             setTimeout(function () {
                 clearInterval(interval);
                 rolling = false;
                 rollButton.disabled = false; // Re-enable the button
                 rollButton.textContent = 'Roll the Dice';
                 
                 // Simulate the game and display the game result
                 const gameResult = simulateGame();
                 resultElement.textContent += `\nGame Result: ${gameResult}`;
             }, 3000); // Adjust the duration as needed
         }
     });

  
  // Call the function to simulate the game


  
  // Call the function to simulate the game
//   console.log("This is the simulateGame full function", simulateGame())
//   simulateGame();

  console.log("This is the simulateGame:", simulateGame());


