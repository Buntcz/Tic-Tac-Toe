import { Player } from "../objects/player";

const player1 = new Player("player1");

it('player1`s name is player1 ', () => {
    expect(player1.name).toBe("player1")
})

it("player1's symbol is X", () => {
    expect(player1.symbol).toBe("X");
})