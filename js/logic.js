// main logic for the game is a function named runGame() which
// takes an argument passed in from the html file.
// the function tasks are to:
// 1. declare the variables
// 2. register a player choice, either heads or tails
// 3. generate a random number 
// 4. map the number to a coin face, either heads or tails
// 5. compare the coin face to the player choice 
// 6. generate a result, either a win or a loss
// 7. output the choice and the result


// Each line of code below is explained by the comment underneath it,
// comments which may seem opaque at first but do contain keywords you can search up

let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
// declares three global variables, set when the page is loaded,
// which are updated each time the function below is run, and which
// are reset to zero whenever the browser tab is reloaded

function runGame(x) {
// creates a function called runGame that takes a single parameter, named x
  
  let choiceResult = x;
  // creates the variable choiceResult used to store the player's chosen coin face
  // choiceResult is set to the value of x, the parameter of the function
  // the value of x derives from the value of the argument when the function is called
  // the function is called in the html, in an onclick attribute, and x is declared there
  // clicking the heads button sets x to 'heads', while the tails button sets it to 'tails'
  
  let randNum = Math.floor(Math.random() * 2) + 1;
  // creates a variable to store a random integer, either 1 or 2

  let flipResult;
  // creates a variable to store an element to output the predicted choice

  // conditional statement 
  if (randNum === 1) {              // if the random number equals 1
    flipResult = 'tails';           // call the result 'tails'
  } else {                          // otherwise
    flipResult = 'heads';           // call the result 'heads'
  };                                // ends the conditional

  let gameResult;
  // creates a variable to determine the game result

  // conditional statement 
  if (flipResult === choiceResult) { // if values of flip and choice match,
    gameResult = "win";              // call the result a win
    gamesWon++;                      // and increment global wins counter
  } else {                           // otherwise
    gameResult = "loss"              // call it a loss
    gamesLost++;                     // and increment global loss counter
  };                                 // ends the conditional

  gamesPlayed++;
  // increments the global variable declared outside this function

  let prediction = document.getElementById('prediction');
  // creates a variable and sets it to the element to hold the predicted choice 
  prediction.innerText = choiceResult; 
  // outputs 'heads' or 'tails'

  let flip = document.getElementById('flip');
  // stores an element to output the result of the flip
  flip.innerText = flipResult; 
  // also outputs 'heads' or 'tails'

  let result = document.getElementById('result');
  // stores an element to output the result of the toss
  result.innerText = gameResult;
  // outputs 'win' or 'loss'

  let gameCount = document.getElementById('count');
  // stores an element to output the number of games played
  gameCount.innerText = gamesPlayed;
  // outputs # of games played (incremented when the function runs)

  let winCount = document.getElementById('wins');
  // stores an element to output the number of games won
  winCount.innerText = gamesWon;
  // outputs # of games played (incremented when the function runs)
  
  let lossCount = document.getElementById('losses');
  // stores an element to output the number of games lost
  lossCount.innerText = gamesLost;
  // outputs # of games played (incremented when the function runs)
}

// a function called resetScore() to clear the scoreboard
// triggered by html onclick event
function resetScore() {
  gamesPlayed = 0;
  gamesWon = 0;
  gamesLost = 0;
  // zeros out all the history variables
  let gameCount = document.getElementById('count');
  // stores an element to output the number of games played
  let winCount = document.getElementById('wins');
  // stores an element to output the number of games won
  let lossCount = document.getElementById('losses');
  // stores an element to output the number of games lost
  gameCount.innerText = gamesPlayed;
  // outputs # of games played (incremented when the function runs)
  winCount.innerText = gamesWon;
  // outputs # of games played (incremented when the function runs)
  lossCount.innerText = gamesLost;
  // outputs # of games played (incremented when the function runs)
}