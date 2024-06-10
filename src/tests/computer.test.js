import { Gameboard } from "../objects/gameboard";
import { Computer } from "../objects/computer";

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