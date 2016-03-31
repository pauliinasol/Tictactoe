console.log("TicTacToe");


//var playerOne = prompt("What is the name of the player X?");
//var playerTwo = prompt("What is the name of the player O?");
//alert(playerOne + " can start the game!");

var gameSquares = document.querySelectorAll('.gamesquare');
var currentPlayer = 'X';

// printObject(gameSquares.item(0).classList);

for(var i = 0; i < gameSquares.length; i++){

  var gameSquare = gameSquares[i];
  gameSquare.addEventListener('click', function(event){
    var p = document.createElement('P');
    p.textContent = currentPlayer;
    event.target.appendChild(p);
    event.target.style.backgroundImage = 'url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/nice_snow.png)';
    if(currentPlayer === 'X'){
      isWinner('X');
      currentPlayer = 'O';
    } else if(currentPlayer === 'O'){
      isWinner('O');
      currentPlayer = 'X';
    }
  });
}

function getCharacter(gameSquare){
  if(gameSquare.children.length > 0){
    return gameSquare.children.item(0).innerHTML;
  } else {
    return false;
  }

}

function isWinner(player) {
//  printObject(gameSquares[0].children.item(0).innerHTML);

 if (getCharacter(gameSquares[0]) == player && getCharacter(gameSquares[1]) == player && getCharacter(gameSquares[2]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else if (getCharacter(gameSquares[3]) == player && getCharacter(gameSquares[4]) == player && getCharacter(gameSquares[5]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else if (getCharacter(gameSquares[6]) == player && getCharacter(gameSquares[7]) == player && getCharacter(gameSquares[8]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else if (getCharacter(gameSquares[0]) == player && getCharacter(gameSquares[4]) == player && getCharacter(gameSquares[8]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else if (getCharacter(gameSquares[2]) == player && getCharacter(gameSquares[4]) == player && getCharacter(gameSquares[6]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else if (getCharacter(gameSquares[0]) == player && getCharacter(gameSquares[3]) == player && getCharacter(gameSquares[6]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else if (getCharacter(gameSquares[1]) == player && getCharacter(gameSquares[4]) == player && getCharacter(gameSquares[7]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else if (getCharacter(gameSquares[2]) == player && getCharacter(gameSquares[5]) == player && getCharacter(gameSquares[8]) == player) {
   console.log(player + " is the winner");
   isTheWinner(player);
 } else {
   checkForTie();
 }
}

function isTheWinner(player) {
var results = document.getElementById("whoWon");
var content = document.createTextNode(player + " won the game!");
results.appendChild(content);
}

function checkForTie(){
  for(var i = 1; i < gameSquares.length+1 ; i++) {
    if(gameSquare[i] === ''){
        console.log('not a tie');
        return false;
      }
    } return true;
}
