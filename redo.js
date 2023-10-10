let currentRollResults = [];
const indexOne = currentRollResults[0];
/*lines 1 and 2 will go together later, currentRollResult I'll create a
function that pushes a new array of numbers into the array and then indexOne ill
use in a condition to see if the first index is either 7 || 11 or 2 || 3 || 12 */
// let dice1 = Math.floor(Math.random() * 6) + 1;
// let dice2 = Math.floor(Math.random() * 6) + 1;
// const sum = dice1 + dice2;
let dice1, dice2, sum;
// currentRollResults.push(sum)
/*Line 6 im creating the 1st dice it gives numbers 1-6, line 7 im crating dice2 that generates a random
number between 1-6 and then on line 8 im adding the two numbers of dice1 and dice2 together */


function shouldEndTurn(rolls) {
  // Check if the last roll is a win (7 or 11) or a loss (2, 3, or 12)
  const lastRoll = rolls[rolls.length - 1];
  const firstRoll = rolls[0];
  const winOnFirstRoll = [7, 11];
  const lossOnFirstRoll = [2, 3, 12];

  if (winOnFirstRoll.includes(firstRoll)) {
    return 'win'; // Player wins on the first roll
  } else if (lossOnFirstRoll.includes(firstRoll)) {
    return 'loss'; // Player loses on the first roll
  } else if (!winOnFirstRoll.includes(firstRoll) && !lossOnFirstRoll.includes(firstRoll)) {
     // Player establishes a point, they need to roll this point again to win
     for (let i = 1; i < rolls.length; i++) {
        if (rolls[i] === firstRoll) {
          return 'win';
        } else if (rolls[i] === 7) {
          return 'loss';
        }
      }
      return 'continue'; // Continue rolling until a point is won or lost
    } else {
      return 'continue'; // Player continues rolling for a point
    }
  }


function simulatePlayerTurn() {
  // Roll the dice multiple times and push each result into currentRollResults
  while (true) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    sum = dice1 + dice2;

    // Check if the turn should end
    const firstRollOutcome = shouldEndTurn(currentRollResults);
    if (firstRollOutcome === 'win' || firstRollOutcome === 'loss') {
      break; // Exit the loop if the turn should end
    }

    currentRollResults.push(sum); // Push the sum after it's assigned
  }

  return currentRollResults;
}

const outcome = simulatePlayerTurn();
console.log('Current Roll Results:', outcome);
console.log('First Roll Outcome:', shouldEndTurn(outcome));
