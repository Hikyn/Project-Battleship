import { playerFactory } from './playerFactory';
import { gameboardFactory } from './gameboardFactory';
import { rendererFactory } from './rendererFactory';

function gameloop(gameboardLength) {
    const gameboard1 = gameboardFactory(gameboardLength);
    let target = document.querySelector('.gameboard-self');
    const player1 = playerFactory('', gameboard1, target);

    const gameboard2 = gameboardFactory(gameboardLength);
    target = document.querySelector('.gameboard-enemy');
    const player2 = playerFactory('Computer', gameboard2, target, true);
    player2.gameboard.randomlyPlaceAllShips();

    const renderer = rendererFactory(player1, player2);
    // Start with rendering ship placement screen.
    renderer.placementScreen.show();
    renderer.placementScreen.appendGameboard(renderer);
    renderer.placementScreen.appendAvailableShips(renderer);

    renderer.placementScreen.onRandomButton(() => {
        if (player1.gameboard.availableShips.length <= 0) {
            player1.gameboard = gameboardFactory(player1.gameboard.length);
        }
        player1.gameboard.randomlyPlaceAllShips();
        renderer.placementScreen.appendGameboard(renderer);
        renderer.placementScreen.appendAvailableShips(renderer);
    });

    renderer.placementScreen.onFinishButton(() => {
        // If player placed all ships, we proceed
        if (player1.gameboard.availableShips.length <= 0) {
            renderer.renderGameboard(player1);

            renderer.renderGameboard(player2);
            renderer.runAttackLoop(player2, player1);
        }
    });

    renderer.placementScreen.onResetButton(() => {
        // Initialize again gameboard for player1
        player1.gameboard = gameboardFactory(player1.gameboard.length);
        renderer.placementScreen.appendGameboard(renderer);
        renderer.placementScreen.appendAvailableShips(renderer);
    });
}

export { gameloop };
