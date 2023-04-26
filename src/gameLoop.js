import { playerFactory } from './playerFactory';
import { shipFactory } from './shipFactory';
import { gameboardFactory } from './gameboardFactory';
import { renderer } from './renderer';

function gameloop(gameboardLength) {
    // Dummy data
    const gameboard1 = gameboardFactory(gameboardLength);
    let target = document.querySelector('.gameboard-self');
    const player1 = playerFactory('Me', gameboard1, target);

    renderer.renderGameboard(player1);
    renderer.renderAvailableShips(player1);

    const gameboard2 = gameboardFactory(gameboardLength);
    target = document.querySelector('.gameboard-enemy');
    const player2 = playerFactory('Computer', gameboard2, target, true);
    player2.gameboard.placeShip(1, 0, 2, 'horizontal');
    player2.gameboard.placeShip(1, 2, 3, 'vertical');
    player2.gameboard.placeShip(3, 4, 2, 'horizontal');

    renderer.renderGameboard(player2);
    renderer.listenForAttacks(player2, player1);
}

export { gameloop };
