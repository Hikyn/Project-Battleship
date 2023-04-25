import { shipFactory } from './shipFactory.js';
import { gameboardFactory } from './gameboardFactory.js';

const renderer = (() => {
    const renderGameboard = (targetParent, gameboard) => {
        // Renders gameboard and appends to target element
        let x = 0;
        gameboard.cells.forEach((column) => {
            let y = 0;
            const columnElement = document.createElement('div');
            columnElement.classList.toggle('column');
            column.forEach((cell) => {
                const cellElement = document.createElement('div');
                cellElement.classList.toggle('cell');
                // If cell was hit before, we will style it appropriately
                if (gameboard.isCellHit(x, y)) {
                    cellElement.classList.toggle('hit');
                }

                if (cell === 0) {
                    cellElement.textContent = 0;
                    cellElement.classList.toggle('empty');
                } else {
                    cellElement.textContent = 1;
                    cellElement.classList.toggle('ship');
                }
                columnElement.appendChild(cellElement);
                y += 1;
            });
            x += 1;
            targetParent.appendChild(columnElement);
        });
    };
    return {
        renderGameboard
    };
})();

export { renderer };
