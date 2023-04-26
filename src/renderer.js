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
        listenForShipPlacement(player);
    };

    const listenForAttacks = (defendingPlayer, attackingPlayer) => {
        const target = defendingPlayer.gameboardElement;
        const columns = target.children;
        for (let i = 0; i < columns.length; i += 1) {
            const column = columns[i];
            const cells = column.children;
            for (let j = 0; j < cells.length; j += 1) {
                cells[j].addEventListener('click', () => {
                    defendingPlayer.gameboard.receiveAttack(i, j);
                    if (defendingPlayer.isLost()) {
                        console.log(`Player ${defendingPlayer.name} loses!`);
                    }
                    renderGameboard(defendingPlayer);
                    listenForAttacks(defendingPlayer, attackingPlayer);
                    // Ai makes a move
                    defendingPlayer.makeMove(attackingPlayer);
                    renderGameboard(attackingPlayer);
                });
            }
        }
    };

    const renderAvailableShips = (player) => {
        const target = document.querySelector('.ships-to-place');
        target.textContent = '';

        const message = document.createElement('div');
        message.textContent = 'Available ships';
        target.appendChild(message);

        const { availableShips } = player.gameboard;
        availableShips.forEach((ship) => {
            const wholeShip = document.createElement('div');
            wholeShip.classList.toggle('ship-container');
            wholeShip.setAttribute('length', `${ship}`);
            for (let i = 0; i < ship; i += 1) {
                const partOfShip = document.createElement('div');
                partOfShip.classList.toggle('available');
                partOfShip.classList.toggle('cell');
                wholeShip.appendChild(partOfShip);
            }
            target.appendChild(wholeShip);
            wholeShip.addEventListener('click', () => {
                if (player.selectedElement !== wholeShip) {
                    for (let i = 0; i < target.children.length; i += 1) {
                        target.children[i].classList.remove('selected');
                    }
                    player.selectedElement = wholeShip;
                    wholeShip.classList.add('selected');
                } else {
                    player.selectedElement = undefined;
                    wholeShip.classList.remove('selected');
                }
            });
        });
    };

    const listenForShipPlacement = (player) => {
        const target = player.gameboardElement;
        const columns = target.children;
        for (let i = 0; i < columns.length; i += 1) {
            const column = columns[i];
            const cells = column.children;
            for (let j = 0; j < cells.length; j += 1) {
                cells[j].addEventListener('click', () => {
                    if (player.selectedElement !== undefined) {
                        const shipLength =
                            player.selectedElement.getAttribute('length');
                        console.log(shipLength);
                        console.log(i, j);

                        player.gameboard.placeShip(
                            i,
                            j,
                            shipLength,
                            'horizontal'
                        );
                        const removeIndex =
                            player.gameboard.availableShips.indexOf(
                                Number(shipLength)
                            );
                        player.gameboard.removeAvailableShip(removeIndex);

                        renderGameboard(player);
                        renderAvailableShips(player);
                    }
                });
            }
        }
    }
    return {
        renderGameboard,
        listenForAttacks,
        renderAvailableShips,
        listenForShipPlacement
    };
})();

export { renderer };
