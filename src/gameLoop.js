import { playerFactory } from './playerFactory';
import { shipFactory } from './shipFactory';
import { gameboardFactory } from './gameboardFactory';
import { renderer } from './renderer';

function gameloop(gameboardLength) {
    // Dummy data
    const gameboard1 = gameboardFactory(gameboardLength);
    let target = document.querySelector('.gameboard-self');
    const player1 = playerFactory('Me', gameboard1, target);
    player1.gameboard.placeShip(0, 0, 2, 'horizontal');
    player1.gameboard.placeShip(2, 2, 3, 'horizontal');
    player1.gameboard.placeShip(1, 3, 2, 'vertical');
    player1.gameboard.receiveAttack(2, 0);
    player1.gameboard.receiveAttack(2, 2);

    renderer.renderGameboard(player1);

    const gameboard2 = gameboardFactory(gameboardLength);
    target = document.querySelector('.gameboard-enemy');
    const player2 = playerFactory('Computer', gameboard2, target, true);
    player2.gameboard.placeShip(1, 0, 2, 'horizontal');
    player2.gameboard.placeShip(1, 2, 3, 'vertical');
    player2.gameboard.placeShip(3, 4, 2, 'horizontal');
    player2.gameboard.receiveAttack(2, 0);
    player2.gameboard.receiveAttack(1, 0);
    player2.gameboard.receiveAttack(2, 2);

    renderer.renderGameboard(player2);
    renderer.listenForAttacks(player2, player1);
}

export { gameloop };
