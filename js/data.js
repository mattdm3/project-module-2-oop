// In this file we have some data that the other source files will use.
// Most of this data is stored in constants.
// Constants are just variables that never change. By convention,
// We write constants with upper case letters.

// The GAME_WIDTH and GAME_HEIGHT constants denote the size
// of the game area in pixels and is used in engine-utilities.js.



const GAME_WIDTH = 720;
const GAME_HEIGHT = 800;

// These constants represent the width and height of an enemy in pixels
// as well as the maximum number of enemies on screen at any given time.
const ENEMY_WIDTH = 80;
const ENEMY_HEIGHT = 90;
const MAX_ENEMIES = 3;

// These constants represent the player width and height.
const PLAYER_WIDTH = 80;
const PLAYER_HEIGHT = 97;

let pic = "images/Dwight.png";

let randomEnemy = Math.floor(Math.random() * 1000);
if (randomEnemy < 350) {
    pic = "images/Andy.png";
} else if (randomEnemy < 600) {
    pic = "images/Dwight.png";
} else if (randomEnemy < 1000) {
    pic = "images/Stanley.png";
}

const paper = document.createElement("img");
document.getElementById("app").appendChild(paper);


const PAPER_WIDTH = 100;
const PAPER_HEIGHT = 121;




