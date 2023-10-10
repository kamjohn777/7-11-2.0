let currentRollResults = [];
const indexOne = currentRollResults[0];
/*lines 1 and 2 will go together later, currentRollResult I'll create a
function that pushes a new array of numbers into the array and then indexOne ill
use in a condition to see if the first index is either 7 || 11 or 2 || 3 || 12 */
// let dice1 = Math.floor(Math.random() * 6) + 1;
// let dice2 = Math.floor(Math.random() * 6) + 1;
// const sum = dice1 + dice2;
let dice1, dice2, sum;
currentRollResults.push(sum)
/*Line 6 im creating the 1st dice it gives numbers 1-6, line 7 im crating dice2 that generates a random
number between 1-6 and then on line 8 im adding the two numbers of dice1 and dice2 together */

function shouldEndTurn(rolls) {
    // Define the points that end the turn (excluding 7, 11)
    const endPoints = [2, 3, 12];
  
    // Check if the last roll is a point or a 7
    const lastRoll = rolls[rolls.length - 1];
  
    // If the last roll is a point, check if it's followed by a 7
    if (!endPoints.includes(lastRoll)) {
      for (let i = rolls.length - 2; i >= 0; i--) {
        if (rolls[i] === 7) {
          return true; // Turn ends if a 7 follows a point
        }
      }
    }
  
    return endPoints.includes(lastRoll); // Turn ends if the last roll is a point
  }
  
  function simulatePlayerTurn() {
    // Roll the dice multiple times and push each result into currentRollResults
    while (true) {
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;
      sum = dice1 + dice2;
      currentRollResults.push(sum);
  
      // Check if the turn should end
      if (shouldEndTurn(currentRollResults)) {
        break; // Exit the loop if the turn should end
      }
    }
  }
  
  // Simulate a player's turn by calling simulatePlayerTurn()
  simulatePlayerTurn();
  
console.log(currentRollResults);