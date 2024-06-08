class Gameboard {
    constructor(board) {
      this.board = this.createBoard(3);
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
   placeMarker(playerSymbol,x,y) {
    
   }
}

export {Gameboard};