import { playerFactory } from './playerFactory';
import { shipFactory } from './shipFactory';
import { gameboardFactory } from './gameboardFactory';

function gameloop(gameboardLength) {
    const gameboard1 = gameboardFactory(gameboardLength);
    const player1 = playerFactory('Me', gameboard1);

    const gameboard2 = gameboardFactory(gameboardLength);
    const player2 = playerFactory('Computer', gameboard2, true);

    let turnCount = 0;
    while (
        player1.gameboard.isAllSunk() === false &&
        player2.gameboard.isAllSunk() === false
    ) {
        turnCount += 1;
        if (turnCount % 2 === 1) {
            console.log(`${player1.name}'s turn`);

            player1.makeMove();
        } else {
            console.log(`${player2.name}'s turn`);

            player2.makeMove();
        }
    }
    if (player1.gameboard.isAllSunk() === true) {
        console.log('Player 2 WINS');
    } else if (player2.gameboard.isAllSunk() === true) {
        console.log('Player 1 WINS');
    } else {
        throw new Error("Some one must have won, but it didn't register");
    }
}

export { gameloop };
