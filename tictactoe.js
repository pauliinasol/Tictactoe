console.log("TicTacToe");

// var button1 = document.querySelector('#box1');
// var buttonReturn1 = document.querySelector('#box1');


// array of all 9 game squares

var gameSquares = document.querySelectorAll('.gamesquare');

// printObject(gameSquares.item(0).classList);

function computerTurn(){
  var possibleMoves = [];
  for(var i = 0; i < gameSquares.length; i++){

    if(gameSquares[i].children.length === 0){
      possibleMoves.push(gameSquares[i]);
    }
  }

  var computerChoice = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

// style.backgroundImage = 'url(buttons/' + imagePrefix + '.png)';
// backgroundColor = '#FBECD6';


  var p = document.createElement('P');
  p.textContent = 'O';
  computerChoice.appendChild(p);
  computerChoice.style.backgroundImage = 'url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrVNhZYpV1slpkXRkDpPNoXiJZSweW6Y_AEzImdFT6193AXqtx)';
  isOWinner();
}

// function printObject(obj){
//  for(var prop in obj){
//    console.log('Property: ' + prop + ' Value: ' + obj[prop]);
//  }


for(var i = 0; i < gameSquares.length; i++){

  var gameSquare = gameSquares[i];
  gameSquare.addEventListener('click', function(event){
    var p = document.createElement('P');
    p.textContent = 'X';
    event.target.appendChild(p);
    event.target.style.backgroundImage = 'url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrVNhZYpV1slpkXRkDpPNoXiJZSweW6Y_AEzImdFT6193AXqtx)';
      isXWinner();
  });
}

function getCharacter(gameSquare){
  if(gameSquare.children.length > 0){
    return gameSquare.children.item(0).innerHTML;
  }else{
    return false;
  }

}

function isXWinner() {
//  printObject(gameSquares[0].children.item(0).innerHTML);

 if (getCharacter(gameSquares[0]) == "X" && getCharacter(gameSquares[1]) == "X" && getCharacter(gameSquares[2]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else if (getCharacter(gameSquares[3]) == "X" && getCharacter(gameSquares[4]) == "X" && getCharacter(gameSquares[5]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else if (getCharacter(gameSquares[6]) == "X" && getCharacter(gameSquares[7]) == "X" && getCharacter(gameSquares[8]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else if (getCharacter(gameSquares[0]) == "X" && getCharacter(gameSquares[4]) == "X" && getCharacter(gameSquares[8]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else if (getCharacter(gameSquares[2]) == "X" && getCharacter(gameSquares[4]) == "X" && getCharacter(gameSquares[6]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else if (getCharacter(gameSquares[0]) == "X" && getCharacter(gameSquares[3]) == "X" && getCharacter(gameSquares[6]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else if (getCharacter(gameSquares[1]) == "X" && getCharacter(gameSquares[4]) == "X" && getCharacter(gameSquares[7]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else if (getCharacter(gameSquares[2]) == "X" && getCharacter(gameSquares[5]) == "X" && getCharacter(gameSquares[8]) == "X") {
   console.log("X is the winner");
   xIsTheWinner();
 } else {
   computerTurn();
 }
}

function isOWinner() {
 if (getCharacter(gameSquares[0]) == "O" && getCharacter(gameSquares[1]) == "O" && getCharacter(gameSquares[2]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else if (getCharacter(gameSquares[3]) == "O" && getCharacter(gameSquares[4]) == "O" && getCharacter(gameSquares[5]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else if (getCharacter(gameSquares[6]) == "O" && getCharacter(gameSquares[7]) == "O" && getCharacter(gameSquares[8]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else if (getCharacter(gameSquares[0]) == "O" && getCharacter(gameSquares[4]) == "O" && getCharacter(gameSquares[8]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else if (getCharacter(gameSquares[2]) == "O" && getCharacter(gameSquares[4]) == "O" && getCharacter(gameSquares[6]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else if (getCharacter(gameSquares[0]) == "O" && getCharacter(gameSquares[3]) == "O" && getCharacter(gameSquares[6]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else if (getCharacter(gameSquares[1]) == "O" && getCharacter(gameSquares[4]) == "O" && getCharacter(gameSquares[7]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else if (getCharacter(gameSquares[2]) == "O" && getCharacter(gameSquares[5]) == "O" && getCharacter(gameSquares[8]) == "O") {
   console.log("O is the winner");
   yIsTheWinner();
 } else {
   console.log("O hasn't won");
 }
}

function xIsTheWinner() {
var results = document.getElementById("whoWon");
var content = document.createTextNode("X WON THE GAME!");
results.appendChild(content);
}

function yIsTheWinner() {
var results = document.getElementById("whoWon");
var content = document.createTextNode("O WON THE GAME!");
results.appendChild(content);
}
