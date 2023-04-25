import './shipFactory.js';
import './gameboardFactory.js';

const renderer = (() => {
    const renderGameboard = (targetParent, gameboard) => {
        // Renders gameboard and appends to target element
        gameboard.cells.forEach((column) => {
            const columnElement = document.createElement('div');
            columnElement.classList.toggle('column');
            column.forEach((cell) => {
                const cellElement = document.createElement('div');
                if (cell === 0) {
                    cellElement.textContent = 0;
                } else {
                    cellElement.textContent = 1;
                }
                columnElement.appendChild(cellElement);
            });
            targetParent.appendChild(columnElement);
        });
    };
    return {
        renderGameboard
    };
})();

export { renderer };
