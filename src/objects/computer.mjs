class Computer {
    constructor(name,symbol) {
        this.name = name;
        this.symbol = symbol;
    }
    getRandomX() {
     let randomX = Math.floor(Math.random() *  2)
     return randomX
    }
    getRandomY() {
      let randomY = Math.floor(Math.random() * 2)
      return randomY
    }
    placeRandomMarker(comp,gameboard) {
        let compTurns = 0
        let symbol = comp;
        let x = this.getRandomX();
        let y = this.getRandomY();
      while(compTurns < 4) {
        if(gameboard.gameEnded === false) {
          if(gameboard.board[x][y] !== "0") {
            x = this.getRandomX()
            y = this.getRandomY()
            return;
          } 
          if(gameboard.board[x][y] === "0") {
          gameboard.placeMarker(symbol,x,y)
          compTurns++
          }
       } else if(gameboard.gameEnded === true) {
           break;
       }
      }
}
}

export {Computer}