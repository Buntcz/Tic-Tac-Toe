class Gameboard {
    constructor(board) {
      this.board = this.createBoard(3);
      this.gameEnded = false;
    }
   createBoard(size) {
    let board = [];
    for(let i = 0; i < size; i++) {
        board[i] = []
    for(let j = 0; j < size; j++) {
        board[i][j] = '0'
    }
    }
    return board
   }
   placeMarker(player,x,y) {
    if(this.gameEnded === false) {
    if(this.board[x][y] !== "0") {
        return;
    } else if(this.board[x][y] === "0") {
        this.board[x][y] = player.symbol
    }
   } else if(this.gameEnded === true) {
    return
   }
 }
 gameWon() {
    if((this.board[0][0] === "X" && this.board[0][1] === "X" && this.board[0][2] === "X") || (this.board[1][0] === "X" && this.board[1][1] === "X" && this.board[1][2] === "X") || (this.board[2][0] === "X" && this.board[2][1] === "X" && this.board[2][2] === "X") || (this.board[0][0] === "X" && this.board[1][0] === "X" && this.board[2][0] === "X") || (this.board[0][1] === "X" && this.board[1][1] === "X" && this.board[2][1] === "X") || (this.board[0][2] === "X" && this.board[1][2] === "X" && this.board[2][2] === "X") || (this.board[0][0] === "X" && this.board[1][1] === "X" && this.board[2][2] === "X") || (this.board[0][2] === "X" && this.board[1][1] === "X" && this.board[2][0] === "X")) {
        this.gameEnded = true;
    } else if ((this.board[0][0] === "O" && this.board[0][1] === "O" && this.board[0][2] === "O") || (this.board[1][0] === "O" && this.board[1][1] === "O" && this.board[1][2] === "O") || (this.board[2][0] === "O" && this.board[2][1] === "O" && this.board[2][2] === "O") || (this.board[0][0] === "O" && this.board[1][0] === "O" && this.board[2][0] === "O") || (this.board[0][1] === "O" && this.board[1][1] === "O" && this.board[2][1] === "O") || (this.board[0][2] === "O" && this.board[1][2] === "O" && this.board[2][2] === "O") || (this.board[0][0] === "O" && this.board[1][1] === "O" && this.board[2][2] === "O") || (this.board[0][2] === "O" && this.board[1][1] === "O" && this.board[2][0] === "O")) {
        this.gameEnded = true;
    } else if(this.board[0][0] !== "0" && this.board[0][1] !== "0" && this.board[0][2] !== "0" && this.board[1][0] !== "0" && this.board[1][1] !== "0" && this.board[1][2] !== "0" && this.board[2][0] !== "0" && this.board[2][1] !== "0" && this.board[2][2] !== "0") {
        this.gameEnded = true;
    }
 }
 resetGame() {
   return this.board =  [
        ['0','0','0'],
        ['0','0','0'],
        ['0','0','0']
    ]
 }
}

export {Gameboard};