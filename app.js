
    let players = [{name: "austin", score:2, id:1}, {name: "kam", score:0, id:2}];
    let player = 'p1';
    let currentRoller = 0;
    let currentRollResults = [];
    let rollResult = 0;

    // create an establishePoinnt and maybe set it to an empty array and the create a point variable that is set to represent the actual points a player can possibly have
    // maybe set stablisehd point to an empty array and push the results inside the array and that will be the point next create a for loop to loop through the point array and set conditions

    // let establishedPoint = null;
    let establishedPoint = [];
    let point = [4,5,6,8,9,10];


    function diceRoll() {
     
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const sum = dice1 + dice2;
      currentRollResults.push(sum);    
    //   console.log(`(inside log for diceRoll function:You rolled a ${sum}`);
      rollResult = sum;
      console.log(rollResult);
      checkDice();
      return rollResult;
        }
    console.log(rollResult);

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
            console.log("test1:")
            if (establishedPoint === null) {
                console.log("test2:")
                // if (rollResult === establishedPoint) {
                    if (point.includes(rollResult)) {
                    console.log("test3:")
                      // Player rolled the established point and wins
                      establishedPoint = rollResult;
        players[currentRoller].score += 1;
        // establishedPoint = rollResult;
        console.log(`${players[currentRoller].name} won this round by rolling the point ${rollResult}`);
        console.log(`${players[currentRoller].name} rolls again`);
        // establishedPoint = rollResult;
        // return;
       return result = `${players[currentRoller].name} won this round by rolling the point ${rollResult} ${players[currentRoller].name} rolls again`;
                }  else if (rollResult === 7) {
                    console.log("test4:")
                    // Player rolled a 7 before rolling the point and loses
                    // establishedPoint = rollResult;
                    players[currentRoller].score -= 1;
                    console.log(`${players[currentRoller].name} rolled a 7 before rolling the point ${establishedPoint} They lose play`);
                    console.log(`${players[currentRoller].name}'s turn is over`);
                    switchPlayer();
                    // return;
                    result = `${players[currentRoller].name} rolled a 7 before rolling the point ${establishedPoint} ${players[currentRoller].name}'s turn is over`;
                  } else {
                    console.log("test5:")
                    // Continue rolling to establish the point
                    // establishedPoint = rollResult;
                    console.log(`${players[currentRoller].name} rolled ${rollResult}, continue rolling to establish the point ${establishedPoint}`);
                   return result = `${players[currentRoller].name} rolled ${rollResult}, continue rolling to establish the point ${establishedPoint}`;
                  }
            }
            if (rollResult === 7 || rollResult === 11) {
                console.log("test6:")
                players[currentRoller].score += 1;
                currentRoller = 0;
                console.log(`${players[currentRoller].name} won this round they rolled a ${rollResult}`);
                // return `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`
               return result = `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`;
            } else if (rollResult === 2 || rollResult === 3 || rollResult === 12) {
                console.log("test7:")
                players[currentRoller].score -= 1;
                currentRoller = 1;
                console.log(`${players[currentRoller].name} loss this round they rolled a ${rollResult}`);
                // return `${players[currentRoller].name} loss this round they rolled a ${rollResult} ${players[currentRoller].name}'s turn is over`
                return result = `${players[currentRoller].name} loss this round they rolled a ${rollResult} ${players[currentRoller].name}'s turn is over`;
                // changeTurns();
                // switchPlayer();
                return;
            } else {
                console.log("test8:")
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
                console.log(currentRollResults);
                console.log(currentRoller);
            }
        } else {
            console.log("test9:")
            // if (rollResult === currentRollResults[0]) {
                if (currentRollResults[0] === 7 || currentRollResults[0] === 11) {
                console.log("test10:")
                players[currentRoller].score += 1;
                // return `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`
                // changeTurns();
                console.log`${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls`
                return result = `${players[currentRoller].name} won this round they rolled a ${rollResult} ${players[currentRoller].name} rolls again`;
                // switchPlayer();
                // return;
            } else {
                console.log("test11:")
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
            }
        }
        // The closing curly brace for the checkDice function should not be commented out.
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
    establishedPoint = null;
    players = [{ name: "austin", score: 2, id: 1 }, { name: "kam", score: 0, id: 2 }];
    let rounds = 10;
  
    // Simulate the game by making a series of dice rolls and checking the results
    for (let i = 0; i < 10; i++) {
      console.log(`Round ${i + 1}`);
      console.log("Next player: " + switchPlayer(players[currentRoller].name));
      const result = diceRoll();
      console.log("Result:", result);
    }
  }
  
  // Call the function to simulate the game
//   console.log("This is the simulateGame full function", simulateGame())
  simulateGame();