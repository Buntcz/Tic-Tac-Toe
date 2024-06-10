import { Gameboard } from "../objects/gameboard.mjs";
import { Computer } from "../objects/computer.mjs";

let gameboard = new Gameboard();
let computer = new Computer("AI", "O");

it("the computer should place a symbol randomly", () => {
    computer.placeRandomMarker(computer,gameboard);
    expect(gameboard.board).not.toStrictEqual(
        [
            ['0','0','0'],
            ['0','0','0'],
            ['0','0','0']
        ]
    )
})