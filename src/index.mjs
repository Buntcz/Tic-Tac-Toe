import "./style.css"

import { Gameboard } from "./objects/gameboard.mjs";
import { Player } from "./objects/player.mjs";
import { Computer } from "./objects/computer.mjs";

let gameboard = new Gameboard();
let player = new Player("player", "X");
let computer = new Computer("AI", "O");
let grid = document.querySelector(".gameboard");



gameboard.placeMarker(player,0,0);
computer.placeRandomMarker(computer,gameboard)
gameboard.placeMarker(player,0,1)
computer.placeRandomMarker(computer,gameboard)
computer.placeRandomMarker(computer,gameboard)
gameboard.placeMarker(player,0,2)
gameboard.gameWon();

console.log(gameboard)