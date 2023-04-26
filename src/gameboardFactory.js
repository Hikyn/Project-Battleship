import { shipFactory } from './shipFactory';

const gameboardFactory = (length) => {
    const cells = new Array(length);
    const missedShots = [];
    const accurateShots = [];
    let availableShips = [5, 4, 3, 3, 2];
    let totalShipsLength = 0;

    // Create double array
    for (let i = 0; i < length; i += 1) {
        cells[i] = new Array(length);
    }

    // Populate double array with 0
    for (let i = 0; i < length; i += 1) {
        for (let j = 0; j < length; j += 1) {
            cells[i][j] = 0;
        }
    }

    const placeShip = (x, y, shipLength, orientation) => {
        const ship = shipFactory(shipLength);
        for (let i = 0; i < shipLength; i += 1) {
            if (orientation === 'vertical') {
                if (cells[x][y + i] !== undefined && cells[x][y + i] !== 0) {
                    throw new Error('Ships are overlapping');
                }
            } else if (cells[x + i] !== undefined && cells[x + i][y] !== 0) {
                throw new Error('Ships are overlapping');
            }
        }

        if (orientation === 'vertical') {
            if (y + shipLength > length) {
                throw new Error('Out of bounds: vertical');
            }
            for (let i = 0; i < shipLength; i += 1) {
                cells[x][y + i] = ship;
            }
            totalShipsLength += shipLength;
        } else if (orientation === 'horizontal') {
            if (x + shipLength > length) {
                throw new Error('Out of bounds: horizontal');
            }
            for (let i = 0; i < shipLength; i += 1) {
                cells[x + i][y] = ship;
            }
            totalShipsLength += shipLength;
        }
    };

    const isCellHit = (x, y) => {
        const hit = [x, y];
        const missedShotsJson = JSON.stringify(missedShots);
        const accurateShotsJson = JSON.stringify(accurateShots);

        if (
            missedShotsJson.includes(hit) === true ||
            accurateShotsJson.includes(hit) === true
        ) {
            return true;
        }
        return false;
    };

    const receiveAttack = (x, y) => {
        if (isCellHit(x, y)) {
            throw new Error('Cant hit same cell twice');
        } else if (cells[x][y] === 0) {
            console.log('Missed shot!');
            missedShots.push([x, y]);
        } else {
            console.log('Accurate shot!');
            cells[x][y].hit();
            accurateShots.push([x, y]);
        }
        return isAllSunk();
    };

    const isAllSunk = () => accurateShots.length >= totalShipsLength;

    return {
        cells,
        receiveAttack,
        isAllSunk,
        placeShip,
        length,
        missedShots,
        accurateShots,
        availableShips,
        isCellHit
    };
};

export { gameboardFactory };
