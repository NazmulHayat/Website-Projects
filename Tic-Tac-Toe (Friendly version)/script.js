var origBoard;
const Player1 = 'O';
const Player2 = 'X';
var name1 = window.prompt("Enter player '0' name: ");
var name2 = window.prompt("Enter player 'X' name: ");

const winCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[6, 4, 2]
]


let GlobCounter = 0;

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
  document.querySelector(".button").style.display = "none";
	document.querySelector(".endgame").style.display = "none";
	origBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
	}
}

function declareWinner(who){
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = who;
  document.querySelector(".button").style.display = "block";
}

function gameOver(gameWon) {
  for(var i = 0; i < cells.length; i++){
    cells[i].removeEventListener('click', turnClick, false);
  }
  declareWinner(gameWon.player == Player1 ? name1+" won" : name2 + " won");
  console.log(typeof(gameWon.index));
  for(let index of winCombos[gameWon.index]){
    document.getElementById(index).style.backgroundColor =
      gameWon.player == Player1 ? "#339900" : "red";
  }
}

let chng = 0;
function turnClick(square) {
  if(typeof origBoard[square.target.id] == 'number'){
    GlobCounter++;
      if(chng==0) {
        turn(square.target.id, Player1);
        chng = 1;
      }
      else{
        turn(square.target.id, Player2);
        chng = 0;
      }
  }
  if(checktie() && document.querySelector(".endgame").style.display != "block" )
    declareWinner("Tie Game!");
}

function turn(squareId, player) {
  if(origBoard[squareId] != Player1 || origBoard[squareId] != Player2)
  {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player);
    if(gameWon) gameOver(gameWon);
  }
}

counter = 0;
function checkWin(board, player) {
      let flag = false;
      var c = 0, counter = 0;
      let row = 0, col = 0;
      let gameWon = null;
      let a = [];
      if(GlobCounter > 2){
        for(let  i = 0 ; i <= 8 ; i++){
          if(board[i] == player){
              a.push(i);
             }
          }
        }

        for(var i = 0 ; i < 8 ; i++){
          for(var j = 0 ; j < 3 ; j++){
            if(a.includes(winCombos[i][j])){
              counter++;

            }
          }
          if(counter == 3){
            index = i;
            gameWon = {index: index, player: player};
            break;
          }
          counter = 0;
        }
        return gameWon;
    }

function checktie(){
  if(emptySquares().length == 0){
    return true;
  }
  return false;

}

function emptySquares(){
  return origBoard.filter(s => typeof s == 'number');
}
