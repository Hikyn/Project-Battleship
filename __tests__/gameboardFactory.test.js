import { gameboardFactory } from '../src/gameboardFactory';

test('Gameboard: correct size', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);
    expect(gameboard.cells[length - 2][length - 2]).toBe(0);
    expect(gameboard.cells[length - 2][length - 1]).toBe(0);
    expect(gameboard.cells[length - 1][length - 2]).toBe(0);
    expect(gameboard.cells[length - 1][length - 1]).not.toBe(undefined);
});

test('Gameboard: places ship horizontally', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    const x = 2;
    const y = 2;
    const shipLength = 2;
    const orientation = 'horizontal';

    gameboard.placeShip(x, y, shipLength, orientation);

    expect(gameboard.cells[x][y]).not.toBe(0);
    expect(gameboard.cells[x + 1][y]).not.toBe(0);
});

test('Gameboard: places ship vertically', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    const x = 2;
    const y = 2;
    const shipLength = 2;
    const orientation = 'vertical';

    gameboard.placeShip(x, y, shipLength, orientation);

    expect(gameboard.cells[x][y]).not.toBe(0);
    expect(gameboard.cells[x][y + 1]).not.toBe(0);
});

test('Gameboard: ship does not go outbounds horizontally', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    const x = 2;
    const y = 2;
    const shipLength = 4;
    const orientation = 'horizontal';

    expect(() => {
        gameboard.placeShip(x, y, shipLength, orientation);
    }).toThrow('Out of bounds: horizontal');
});

test('Gameboard: ship does not go outbounds vertically', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    const x = 2;
    const y = 2;
    const shipLength = 4;
    const orientation = 'vertical';

    expect(() => {
        gameboard.placeShip(x, y, shipLength, orientation);
    }).toThrow('Out of bounds: vertical');
});

test('Gameboard: ship receive attacks correctly, happy path', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    const x = 2;
    const y = 2;
    const shipLength = 2;
    const orientation = 'vertical';

    gameboard.placeShip(x, y, shipLength, orientation);
    gameboard.receiveAttack(x, y);
    gameboard.receiveAttack(x, y + 1);
    expect(gameboard.cells[x][y].isSunk()).toBe(true);
});

test('Gameboard: cant hit same spot with ship twice', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    const x = 2;
    const y = 2;
    const shipLength = 2;
    const orientation = 'vertical';

    gameboard.placeShip(x, y, shipLength, orientation);
    gameboard.receiveAttack(x, y);
    expect(() => {
        gameboard.receiveAttack(x, y);
    }).toThrow('Cant hit same cell twice');
});

test('Gameboard: cant hit same spot without ship twice', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    const x = 4;
    const y = 4;

    gameboard.receiveAttack(x, y);
    expect(() => {
        gameboard.receiveAttack(x, y);
    }).toThrow('Cant hit same cell twice');
});

test('Gameboard: can hit any cell', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    expect(() => {
        gameboard.receiveAttack(0, 0);
    }).not.toThrow('Cant hit same cell twice');
    expect(() => {
        gameboard.receiveAttack(0, 1);
    }).not.toThrow('Cant hit same cell twice');
    expect(() => {
        gameboard.receiveAttack(1, 0);
    }).not.toThrow('Cant hit same cell twice');
    expect(() => {
        gameboard.receiveAttack(1, 1);
    }).not.toThrow('Cant hit same cell twice');
    expect(() => {
        gameboard.receiveAttack(0, 2);
    }).not.toThrow('Cant hit same cell twice');
    expect(() => {
        gameboard.receiveAttack(2, 1);
    }).not.toThrow('Cant hit same cell twice');
});

test('Gameboard: checks if all ships are sunken', () => {
    const length = 5;
    const gameboard = gameboardFactory(length);

    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = 'horizontal';

    gameboard.placeShip(x, y, shipLength, orientation);

    x = 2;
    y = 4;
    shipLength = 2;
    orientation = 'horizontal';

    gameboard.placeShip(x, y, shipLength, orientation);

    expect(gameboard.isAllSunk()).toBe(false);

    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(3, 2);

    expect(gameboard.isAllSunk()).toBe(false);

    gameboard.receiveAttack(2, 4);
    gameboard.receiveAttack(3, 4);

    expect(gameboard.isAllSunk()).toBe(true);
});
