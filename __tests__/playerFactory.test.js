import { expect, test } from '@jest/globals';
import { playerFactory } from '../src/playerFactory';
import { gameboardFactory } from '../src/gameboardFactory';

test('Player: check if all ships are placed', () => {
    const gameboard1 = gameboardFactory(6, [5, 4, 3, 2]);
    const target = '.gameboard-self';
    const player1 = playerFactory('Me', gameboard1, target);
    expect(player1.isAllShipsPlaced()).toBe(false);

    player1.gameboard.placeShip(0, 0, 5, 'horizontal');
    player1.gameboard.placeShip(0, 1, 4, 'horizontal');
    player1.gameboard.placeShip(0, 2, 3, 'horizontal');
    player1.gameboard.placeShip(0, 3, 2, 'horizontal');

    expect(player1.isAllShipsPlaced()).toBe(true);
});
