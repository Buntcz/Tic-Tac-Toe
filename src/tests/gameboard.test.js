import { Gameboard } from "../objects/gameboard";
import { Player } from "../objects/player";

const gameboard = new Gameboard();
const player = new Player();

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
    gameboard.placeMarker(player.symbol,0,1);
    expect(gameboard.board).toStrictEqual(
        [
            ['X','0','0'],
            ['0','0','0'],
            ['0','0','0']
        ]
    )
})