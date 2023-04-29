import { gameboardFactory } from './gameboardFactory';

const renderer = (() => {
    const renderPlacementScreen = (
        player,
        enemyPlayer,
        targetParent = player.gameboardElement
    ) => {
        targetParent.textContent = '';

        const popUpScreen = document.createElement('div');
        popUpScreen.classList.add('pop-Up-Screen');

        const popUpTitle = document.createElement('div');
        popUpTitle.textContent = `Admiral ${player.name}, place your ships!`;
        popUpTitle.classList.add('title');

        const popUpMain = document.createElement('div');
        popUpMain.classList.add('main');

        const popUpGameboard = document.createElement('div');
        popUpGameboard.classList.add('gameboard');

        const popUpAvailableShips = document.createElement('div');
        popUpAvailableShips.classList.add('pop-Up-AvailableShips');

        const randomButton = document.createElement('button');
        randomButton.classList.add('btn-retry');
        randomButton.textContent = 'Random';
        randomButton.addEventListener('click', () => {
            player.gameboard.randomlyPlaceAllShips();
            renderPlacementScreen(player, enemyPlayer, targetParent);
        });

        const finishButton = document.createElement('button');
        finishButton.classList.add('btn-finish');
        finishButton.classList.add('grayed');
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', () => {
            if (player.gameboard.availableShips.length <= 0) {
                renderGameboard(player);

                renderGameboard(enemyPlayer);
                listenForAttacks(enemyPlayer, player);
            }

        });

        const resetButton = document.createElement('button');
        resetButton.classList.add('btn-reset');
        resetButton.textContent = 'Reset';
        resetButton.addEventListener('click', () => {
            player.gameboard = gameboardFactory(player.gameboard.length);
            renderPlacementScreen(player, targetParent);
        });

        const buttons = document.createElement('div');
        buttons.classList.add('btns');

        buttons.appendChild(randomButton);
        buttons.appendChild(finishButton);
        buttons.appendChild(resetButton);

        popUpMain.appendChild(popUpGameboard);
        popUpMain.appendChild(popUpAvailableShips);

        popUpScreen.appendChild(popUpTitle);
        popUpScreen.appendChild(popUpMain);
        popUpScreen.appendChild(buttons);

        targetParent.appendChild(popUpScreen);

        renderGameboard(player, popUpGameboard);
        renderAvailableShips(
            player,
            document.querySelector('.pop-Up-AvailableShips')
        );
    };

    const renderGameboard = (
        player,
        targetParent = player.gameboardElement
    ) => {
        const createCoordinateColumn = () => {
            const newColumnElement = createColumn();
            let newCellElement;
            for (let i = -1; i < player.gameboard.length; i += 1) {
                if (i === -1) {
                    newCellElement = document.createElement('div');
                    newCellElement.classList.toggle('cell');
                    newCellElement.classList.toggle('null');
                } else {
                    newCellElement = document.createElement('div');
                    newCellElement.classList.toggle('cell');
                    newCellElement.textContent = `${i + 1}`;
                }
                newColumnElement.appendChild(newCellElement);
            }

            return newColumnElement;
        };

        const createColumn = () => {
            const newColumnElement = document.createElement('div');
            newColumnElement.classList.toggle('column');

            return newColumnElement;
        };

        const createAlphabetCell = (letter) => {
            const charcode = 65 + Number(letter);
            const char = String.fromCharCode(charcode);
            const newCellElement = document.createElement('div');
            newCellElement.classList.toggle('cell');
            newCellElement.textContent = char;

            return newCellElement;
        };

        const createGameboardCell = (x, y) => {
            const cell = player.gameboard.cells[x][y];

            const newCellElement = document.createElement('button');
            newCellElement.classList.toggle('cell');

            if (player.gameboard.isCellHit(x, y)) {
                newCellElement.classList.toggle('hit');
            }

            if (cell === 0) {
                // newCellElement.textContent = 0;
                newCellElement.classList.toggle('empty');
            } else {
                newCellElement.classList.toggle('ship');

                if (cell.isSunk()) {
                    newCellElement.classList.toggle('sunk');
                }
            }

            return newCellElement;
        };
        // Renders gameboard and appends to target element
        targetParent.textContent = '';

        let columnElement;
        let cellElement;

        for (let x = -1; x < player.gameboard.cells.length; x += 1) {
            // If it is a first column, we create coordinate column
            if (x === -1) {
                columnElement = createCoordinateColumn();
            } else {
                // Else we create usual column and populate it
                columnElement = createColumn();

                for (let y = -1; y < player.gameboard.cells.length; y += 1) {
                    // First row will get a letter
                    if (y === -1) {
                        cellElement = createAlphabetCell(x);
                    } else {
                        cellElement = createGameboardCell(x, y);
                    }
                    columnElement.appendChild(cellElement);
                }
            }
            targetParent.appendChild(columnElement);
        }
        listenForShipPlacement(player, targetParent);
    };

    const listenForAttacks = (defendingPlayer, attackingPlayer) => {
        const target = defendingPlayer.gameboardElement;
        const columns = target.children;
        for (let i = 0; i < columns.length; i += 1) {
            const column = columns[i];
            const cells = column.children;
            for (let j = 0; j < cells.length; j += 1) {
                cells[j].addEventListener('click', () => {
                    if (!attackingPlayer.isAllShipsPlaced()) {
                        console.log(
                            `Player ${attackingPlayer.name} has not finished placing ships`
                        );
                        console.log(
                            `Remaining ships: ${attackingPlayer.gameboard.availableShips}`
                        );
                        return;
                    }
                    // i - 1, j - 1 compensating for Coordinates(A,B,C) (1,2,3)
                    defendingPlayer.gameboard.receiveAttack(i - 1, j - 1);
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

    const renderAvailableShips = (
        player,
        targetParent = document.querySelector('.pop-Up-AvailableShips')
    ) => {
        targetParent.textContent = '';

        const createMessage = (text) => {
            const message = document.createElement('div');
            message.textContent = `${text}`;
            return message;
        };

        const createOrientationButton = () => {
            const orientationButton = document.createElement('button');
            orientationButton.classList.add('button-orientation');
            orientationButton.textContent = player.selectedOrientation;

            orientationButton.addEventListener('click', () => {
                if (player.selectedOrientation === 'horizontal') {
                    player.selectedOrientation = 'vertical';
                } else {
                    player.selectedOrientation = 'horizontal';
                }
                player.selectedElement = undefined;
                renderAvailableShips(player);
            });

            return orientationButton;
        };

        const renderUnusedShips = () => {
            const target = document.createElement('div');
            target.classList.toggle('ships-to-place');
            targetParent.appendChild(target);

            target.textContent = '';
            target.classList.remove('vertical');
            target.classList.remove('horizontal');
            target.classList.add(`${player.selectedOrientation}`);

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

        const colorFinishButton = () => {
            const finishButton = document.querySelector('.btn-finish');
            if (
                finishButton !== undefined &&
                player.gameboard.availableShips.length > 0
            ) {
                finishButton.classList.add('grayed');
            } else if (finishButton !== undefined) {
                finishButton.classList.remove('grayed');
            }
        };
        // Message above orientation change button
        targetParent.appendChild(createMessage('Available ships'));

        // Change orientation button and its logic
        targetParent.appendChild(createOrientationButton());

        // Rendering ships under change orientation button
        renderUnusedShips();

        colorFinishButton();

    };

    const listenForShipPlacement = (
        player,
        targetParent = player.gameboardElement
    ) => {
        const columns = targetParent.children;
        for (let i = 0; i < columns.length; i += 1) {
            const column = columns[i];
            const cells = column.children;
            for (let j = 0; j < cells.length; j += 1) {
                cells[j].addEventListener('click', () => {
                    if (player.selectedElement !== undefined) {
                        const shipLength =
                            player.selectedElement.getAttribute('length');
                        // console.log(shipLength);
                        // console.log(i, j);
                        // i - 1, j - 1 due to having coordinate (A,B,C...), (1, 2, 3...)
                        player.gameboard.placeShip(
                            i - 1,
                            j - 1,
                            shipLength,
                            player.selectedOrientation
                        );
                        const removeIndex =
                            player.gameboard.availableShips.indexOf(
                                Number(shipLength)
                            );
                        player.gameboard.removeAvailableShip(removeIndex);

                        renderGameboard(player, targetParent);
                        renderAvailableShips(player);
                    }
                });
            }
        }
    };
    return {
        renderPlacementScreen,
        renderGameboard,
        listenForAttacks,
        renderAvailableShips,
        listenForShipPlacement
    };
})();

export { renderer };
