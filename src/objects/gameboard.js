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
    if(this.board[0][0] === "X" && this.board[0][1] === "X" && this.board[0][2] === "X") {
        this.gameEnded = true;
    }
 }
}

export {Gameboard};