
    let players = [{name: "austin", score:2, id:1}, {name: "kam", score:0, id:2}];
    let player = 'p1';
    let currentRoller = 0;
    let currentRollResults = [];
    let rollResult = 0;
    let establishedPoint = null;
   
    function diceRoll() {
    
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const sum = dice1 + dice2;
      currentRollResults.push(sum);    
    //   console.log(`(inside log for diceRoll function:You rolled a ${sum}`);
      rollResult = sum;
      checkDice();
      return sum;
    }

    function switchPlayer(currentPlayerName) {
        if (currentPlayerName === players[0].name) {
          return players[1].name;
        } else if (currentPlayerName === players[1].name) {
          return players[0].name;
        } else {
          // Handle the case where the provided name is not one of the player names.
          return currentPlayerName;
        }
    }

   
    function checkDice() {
        let result = ''; 

        if (currentRollResults[0]) {
            if (establishedPoint !== null) {
                if (rollResult === establishedPoint) {
                      // Player rolled the established point and wins
        players[currentRoller].score += 1;
        console.log(`${players[currentRoller].name} won this round by rolling the point ${rollResult}`);
        console.log(`${players[currentRoller].name} rolls again`);
        establishedPoint = null;
        // return;
       return result = `${players[currentRoller].name} won this round by rolling the point ${rollResult} ${players[currentRoller].name} rolls again`;
                }  else if (rollResult === 7) {
                    // Player rolled a 7 before rolling the point and loses
                    players[currentRoller].score -= 1;
                    console.log(`${players[currentRoller].name} rolled a 7 before rolling the point ${establishedPoint}`);
                    console.log(`${players[currentRoller].name}'s turn is over`);
                    switchPlayer();
                    // return;
                    result = `${players[currentRoller].name} rolled a 7 before rolling the point ${establishedPoint} ${players[currentRoller].name}'s turn is over`;
                  } else {
                    // Continue rolling to establish the point
                    console.log(`${players[currentRoller].name} rolled ${rollResult}, continue rolling to establish the point ${establishedPoint}`);
                   return result = `${players[currentRoller].name} rolled ${rollResult}, continue rolling to establish the point ${establishedPoint}`;
                  }
            }
            if (rollResult === 7 || rollResult === 11) {
                players[currentRoller].score += 1;
                currentRoller = 0;
                // console.log(`${players[currentRoller].name} won this round they rolled a ${rollResult}`);
                // return `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`
               return result = `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`;
            } else if (rollResult === 2 || rollResult === 3 || rollResult === 12) {
                players[currentRoller].score -= 1;
                currentRoller = 1;
                // console.log(`${players[currentRoller].name} loss this round they rolled a ${rollResult}`);
                // return `${players[currentRoller].name} loss this round they rolled a ${rollResult} ${players[currentRoller].name}'s turn is over`
                return result = `${players[currentRoller].name} loss this round they rolled a ${rollResult} ${players[currentRoller].name}'s turn is over`;
                // changeTurns();
                switchPlayer();
                return;
            } else {
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
            }
        } else {
            if (rollResult === currentRollResults[0]) {
                players[currentRoller].score += 1;
                // return `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`
                // changeTurns();
                return result = `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`;
                switchPlayer();
                // return;
            } else {
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
            }
        }
        // The closing curly brace for the checkDice function should not be commented out.
        return result;
    }

  
    console.log("Next player: " + switchPlayer('austin')); // This will return 'kam'
console.log("Next player: " + switchPlayer('kam')); // This will return 'austin'
// console.log("Next player: " + switchPlayer('unknown')); // This will return 'unknown'
// console.log("this is the diceroll function:" ,diceRoll())
// console.log("This is the currentRollResulet", currentRollResults);
// diceRoll();
// console.log("this is the checkDice function:", checkDice());
// diceRoll();
// checkDice();



// Simulate the game by calling diceRoll and checkDice
diceRoll();

// Call checkDice and store its result in a variable
const resultMessage = checkDice();

// Log the result message
console.log("This is the checkDice function:", resultMessage);