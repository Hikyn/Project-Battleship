import './style.css';
import { shipFactory } from './shipFactory';
import { gameboardFactory } from './gameboardFactory';
import { playerFactory } from './playerFactory';
import { renderer } from './renderer';
import { gameloop } from './gameLoop.js';

console.log('Scripts are working');

const gameboard1 = gameboardFactory(6);
const player1 = playerFactory('Me', gameboard1);
player1.gameboard.placeShip(0, 0, 2, 'horizontal');
player1.gameboard.placeShip(2, 2, 3, 'horizontal');
player1.gameboard.placeShip(1, 3, 2, 'vertical');
player1.gameboard.receiveAttack(2, 0);
player1.gameboard.receiveAttack(2, 2);

let target = document.querySelector('.gameboard-self');
renderer.renderGameboard(target, player1);

const gameboard2 = gameboardFactory(6);
const player2 = playerFactory('Computer', gameboard2, true);
player2.gameboard.placeShip(1, 0, 2, 'horizontal');
player2.gameboard.placeShip(1, 2, 3, 'vertical');
player2.gameboard.placeShip(3, 4, 2, 'horizontal');
player2.gameboard.receiveAttack(2, 0);
player2.gameboard.receiveAttack(1, 0);
player2.gameboard.receiveAttack(2, 2);

target = document.querySelector('.gameboard-enemy');
renderer.renderGameboard(target, player2);
renderer.addEventListenersToCells(target, player2);

//gameloop(5);
