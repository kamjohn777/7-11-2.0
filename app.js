
    let players = [{name: "austin", score:2, id:1}, {name: "kam", score:0, id:2}];
    // let player = 'p1';
    // let currentRoller = 0;
    let currentRoller= 0;
    let currentRollResults = [];
    let rollResult = 0;

    // create an establishePoinnt and maybe set it to an empty array and the create a point variable that is set to represent the actual points a player can possibly have
    // maybe set stablisehd point to an empty array and push the results inside the array and that will be the point next create a for loop to loop through the point array and set conditions

    // let establishedPoint = null;
    // let establishedPoint = [];
    let establishedPoint = [null, null];
    // let establishedPoint = 0;
    let point = [4,5,6,8,9,10];


    function diceRoll() {
     
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const sum = dice1 + dice2;
      currentRollResults.push(sum);    
    //   console.log(`(inside log for diceRoll function:You rolled a ${sum}`);
      rollResult = sum;
      console.log(rollResult);
    //   checkDice();
      return rollResult;
        }
    console.log(rollResult);

    function switchPlayer(currentPlayerName) {
        if (currentPlayerName === players[0].name) {
            currentRoller = 1;
            currentRollResults = [];
          return players[1].name;
        } else if (currentPlayerName === players[1].name) {
            currentRoller = 0;
            currentRollResults = [];
          return players[0].name;
        } else {
          // Handle the case where the provided name is not one of the player names.
          return currentPlayerName;
        }
    }

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
                            }
                            switchPlayer();
                            return result = `${players[currentRoller].name} rolled ${rollResult}. ${players[currentRoller].name}'s turn is over`;
                        }
                }
            }
        }
    
        console.log(result);
        return result;
    }
    
    const loopOfGame = () => {
        // while()
        if(players[currentRollResults].score === 25) {
         return players[currentRoller].name;
        }
    }

  
console.log("Next player: " + switchPlayer('austin')); // This will return 'kam'
console.log("Next player: " + switchPlayer('kam')); // This will return 'austin'
console.log("this is the diceroll function:" ,diceRoll())
console.log("This is the currentRollResulet", currentRollResults);

// Simulate the game by calling diceRoll and checkDice
console.log("first call", diceRoll());
console.log("second call", diceRoll());
console.log("3rd call", diceRoll());
console.log("4th", diceRoll());
// Call checkDice and store its result in a variable
const resultMessage = checkDice();
console.log("regular call of checkDice", checkDice());
// Log the result message
console.log("This is the checkDice function:", resultMessage);


function simulateGame() {
    // Initialize game state if needed
    currentRoller = 0;
    currentRollResults = [];
    rollResult = 0;
    establishedPoint = [null, null]; // Initialize an array for established points
    players = [{ name: "austin", score: 2, id: 1 }, { name: "kam", score: 0, id: 2 }];
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
  
  // Call the function to simulate the game
  simulateGame();

  
  // Call the function to simulate the game
//   console.log("This is the simulateGame full function", simulateGame())
//   simulateGame();

  console.log("This is the simulateGame:", simulateGame());