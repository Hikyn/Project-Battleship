import { shipFactory } from './shipFactory.js';
import { gameboardFactory } from './gameboardFactory.js';

const renderer = (() => {
    const renderGameboard = (player) => {
        // Renders gameboard and appends to target element
        const targetParent = player.gameboardElement;
        targetParent.textContent = '';
        let x = 0;
        player.gameboard.cells.forEach((column) => {
            let y = 0;
            const columnElement = document.createElement('div');
            columnElement.classList.toggle('column');
            column.forEach((cell) => {
                const cellElement = document.createElement('button');
                cellElement.classList.toggle('cell');
                // If cell was hit before, we will style it appropriately
                if (player.gameboard.isCellHit(x, y)) {
                    cellElement.classList.toggle('hit');
                }

                if (cell === 0) {
                    // cellElement.textContent = 0;
                    cellElement.classList.toggle('empty');
                } else {
                    cellElement.classList.toggle('ship');
                    if (player.gameboard.cells[x][y].isSunk()) {
                        cellElement.classList.toggle('sunk');
                    }
                }
                columnElement.appendChild(cellElement);
                y += 1;
            });
            x += 1;
            targetParent.appendChild(columnElement);
        });
    };

    const addEventListenersToCells = (player, enemyPlayer) => {
        const target = player.gameboardElement;
        const targetChildren = target.children;
        for (let i = 0; i < targetChildren.length; i += 1) {
            const column = targetChildren[i];
            const columnChildren = column.children;
            for (let j = 0; j < columnChildren.length; j += 1) {
                columnChildren[j].addEventListener('click', () => {
                    player.gameboard.receiveAttack(i,j);
                    if (player.isLost()) {
                        console.log(`Player ${player.name} loses!`);
                    }
                    renderGameboard(player);
                    addEventListenersToCells(player, enemyPlayer);
                    // Ai makes a move
                    player.makeMove(enemyPlayer);
                    renderGameboard(enemyPlayer);
                });
            }
        }
    };
    return {
        renderGameboard,
        addEventListenersToCells
    };
})();

export { renderer };
