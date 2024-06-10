class Computer {
    constructor(name,symbol) {
        this.name = name;
        this.symbol = symbol;
    }
    getRandomX() {
     let randomX = Math.floor(Math.random() *  3)
     return randomX
    }
    getRandomY() {
      let randomY = Math.floor(Math.random() * 3)
      return randomY
    }
    placeRandomMarker(comp,gameboard) {
    
        let symbol = comp;
        let x = this.getRandomX();
        let y = this.getRandomY();
        if(gameboard.gameEnded === false) {
       if(gameboard.board[x][y] !== "0") {
         return x = this.getRandomX(),y = this.getRandomY()
        
       } 
       if(gameboard.board[x][y] === "0") {
       gameboard.placeMarker(symbol,x,y)
       }
    } else if(gameboard.gameEnded === true) {
        return;
    }
}
}

export {Computer}