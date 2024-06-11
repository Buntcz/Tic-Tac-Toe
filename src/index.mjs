import "./style.css"

import { Gameboard } from "./objects/gameboard.mjs";
import { Player } from "./objects/player.mjs";
import { Computer } from "./objects/computer.mjs";

let gameboard = new Gameboard();
let player = new Player("player", "X");
let player2 = new Player("player", "O")
let computer = new Computer("AI", "O");
let gridItem = document.querySelectorAll(".grid-item")
const body = document.querySelector("body")
const resetButton = document.querySelector(".reset")
const winMsg = document.querySelector(".wonGame")

let playerTurn = player;

function turns() {
    if (playerTurn === player) {
        playerTurn = player2 
    } else if(playerTurn === player2) {
        playerTurn = player
    }
}

function makeResetVisiable() {
        resetButton.style.display = "flex"
}

resetButton.addEventListener("click", () => {
    gameboard.resetGame();
    gridItem.forEach(gridItem => {
        gridItem.textContent = "";
    })
    gameboard.gameEnded = false;
    playerTurn = player;
    winMsg.textContent = ""
    resetButton.style.display = "none"
})

gridItem.forEach(gridItem => {
    gridItem.addEventListener("click" , () => {
        gameboard.gameWon();
        if(gameboard.gameEnded === false) {
        gridItem.textContent = playerTurn.symbol
        gameboard.placeMarker(playerTurn,gridItem.dataset.coord1,gridItem.dataset.coord2)
        console.log(gameboard)
        turns()
        } else if(gameboard.gameEnded === true) {
            makeResetVisiable();
            winMsg.textContent = `${playerTurn.symbol} lost :(`
            return;
        }
    })
})