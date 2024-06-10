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
        let symbol = comp;
        let x = this.getRandomX();
        let y = this.getRandomY();

       gameboard.placeMarker(symbol,x,y)
    }
}

export {Computer}