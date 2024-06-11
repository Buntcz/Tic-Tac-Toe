import { Gameboard } from "../objects/gameboard";
import { Player } from "../objects/player";

const gameboard = new Gameboard();
const player = new Player("player1", "X");
const player2 = new Player("player2", "O")

it("Gameboard should be an array", () => {
   expect(gameboard.board).toBeInstanceOf(Array)
})

it("Gameboard array should be filled with 0`s", () => {
   expect(gameboard.board).toStrictEqual(
    [
        ['0','0','0'],
        ['0','0','0'],
        ['0','0','0']
    ]
   )
})

it('player should be able to place symbol on the board', () => {
    gameboard.placeMarker(player,0,0);
    expect(gameboard.board).toStrictEqual(
        [
            ['X','0','0'],
            ['0','0','0'],
            ['0','0','0']
        ]
    )
})

it('It should prevent placing other symbol on X`s place', () => {
    gameboard.placeMarker(player2,0,0);
    expect(gameboard.board).toStrictEqual(
        [
            ['X','0','0'],
            ['0','0','0'],
            ['0','0','0']
        ]
    )
})

it("It should print out the winning board", () => {
    gameboard.placeMarker(player,0,1);
    gameboard.placeMarker(player,0,2);
    expect(gameboard.board).toStrictEqual(
        [
            ['X','X','X'],
            ['0','0','0'],
            ['0','0','0']
        ]
    )
})

it("gameEnded should be changed to true", () => {
    gameboard.gameWon();
    expect(gameboard.gameEnded).toBeTruthy()
})

it("gameboard has been reset", () => {
    gameboard.resetGame();
    expect(gameboard.board).toStrictEqual(
        [
            ['0','0','0'],
            ['0','0','0'],
            ['0','0','0']
        ]
    )
})