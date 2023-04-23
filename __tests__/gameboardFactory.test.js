import { gameboardFactory } from "../src/gameboardFactory";
import { test } from '@jest/globals';

test('Gameboard factory: creates correct length', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    expect(gameboard.cells[length - 2][length - 2]).toBe(0);
    expect(gameboard.cells[length - 2][length - 1]).toBe(0);
    expect(gameboard.cells[length - 1][length - 2]).toBe(0);
    expect(gameboard.cells[length - 1][length - 1]).not.toBe(undefined);
})

test('Gameboard factory: places ship horizontally', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = "horizontal";

    gameboard.placeShip(x, y, shipLength, orientation);

    expect(gameboard.cells[x][y]).not.toBe(0 || 1);
    expect(gameboard.cells[x + 1][y]).not.toBe(0 || 1);
})

test('Gameboard factory: places ship vertically', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = "vertical";

    gameboard.placeShip(x, y, shipLength, orientation);
    
    expect(gameboard.cells[x][y]).not.toBe(0 || 1);
    expect(gameboard.cells[x][y + 1]).not.toBe(0 || 1);
})

test('Gameboard factory: ship does not go outbounds horizontally', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 4;
    let orientation = "horizontal";

    expect(() => { gameboard.placeShip(x, y, shipLength, orientation); }).toThrow("Out of bounds: horizontal");
})

test('Gameboard factory: ship does not go outbounds vertically', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 4;
    let orientation = "vertical";

    expect(() => { gameboard.placeShip(x, y, shipLength, orientation); }).toThrow("Out of bounds: vertical");
})
