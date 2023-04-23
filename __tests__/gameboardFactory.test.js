import { gameboardFactory } from "../src/gameboardFactory";
import { test } from '@jest/globals';

test('Gameboard: correct size', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    expect(gameboard.cells[length - 2][length - 2]).toBe(0);
    expect(gameboard.cells[length - 2][length - 1]).toBe(0);
    expect(gameboard.cells[length - 1][length - 2]).toBe(0);
    expect(gameboard.cells[length - 1][length - 1]).not.toBe(undefined);
})

test('Gameboard: places ship horizontally', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = "horizontal";

    gameboard.placeShip(x, y, shipLength, orientation);

    expect(gameboard.cells[x][y]).not.toBe(0);
    expect(gameboard.cells[x + 1][y]).not.toBe(0);
})

test('Gameboard: places ship vertically', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = "vertical";

    gameboard.placeShip(x, y, shipLength, orientation);
    
    expect(gameboard.cells[x][y]).not.toBe(0);
    expect(gameboard.cells[x][y + 1]).not.toBe(0);
})

test('Gameboard: ship does not go outbounds horizontally', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 4;
    let orientation = "horizontal";

    expect(() => { gameboard.placeShip(x, y, shipLength, orientation); }).toThrow("Out of bounds: horizontal");
})

test('Gameboard: ship does not go outbounds vertically', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 4;
    let orientation = "vertical";

    expect(() => { gameboard.placeShip(x, y, shipLength, orientation); }).toThrow("Out of bounds: vertical");
})

test('Gameboard: ship receive attacks correctly, happy path', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = "vertical";

    gameboard.placeShip(x, y, shipLength, orientation)
    gameboard.receiveAttack(x, y)
    gameboard.receiveAttack(x, y + 1)
    expect(gameboard.cells[x][y].isSunk()).toBe(true);
})

test('Gameboard: cant hit same spot with ship twice', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = "vertical";

    gameboard.placeShip(x, y, shipLength, orientation)
    gameboard.receiveAttack(x, y)
    expect(() => { gameboard.receiveAttack(x, y); }).toThrow("Cant hit same cell twice");
})

test('Gameboard: cant hit same spot without ship twice', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 4;
    let y = 4;

    gameboard.receiveAttack(x, y)
    expect(() => { gameboard.receiveAttack(x, y); }).toThrow("Cant hit same cell twice");
})

test('Gameboard: can hit any cell', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);

    expect(() => { gameboard.receiveAttack(0, 0); }).not.toThrow("Cant hit same cell twice");
    expect(() => { gameboard.receiveAttack(0, 1); }).not.toThrow("Cant hit same cell twice");
    expect(() => { gameboard.receiveAttack(1, 0); }).not.toThrow("Cant hit same cell twice");
    expect(() => { gameboard.receiveAttack(1, 1); }).not.toThrow("Cant hit same cell twice");
    expect(() => { gameboard.receiveAttack(0, 2); }).not.toThrow("Cant hit same cell twice");
    expect(() => { gameboard.receiveAttack(2, 1); }).not.toThrow("Cant hit same cell twice");
})

test('Gameboard: checks if all ships are sunken', () => {
    let length = 5;
    let gameboard = gameboardFactory(length);
    
    let x = 2;
    let y = 2;
    let shipLength = 2;
    let orientation = "horizontal";

    gameboard.placeShip(x, y, shipLength, orientation)

    x = 2;
    y = 4;
    shipLength = 2;
    orientation = "horizontal";

    gameboard.placeShip(x, y, shipLength, orientation)

    expect(gameboard.isAllSunk()).toBe(false)

    gameboard.receiveAttack(2,2)
    gameboard.receiveAttack(3,2)

    expect(gameboard.isAllSunk()).toBe(false)

    gameboard.receiveAttack(2,4)
    gameboard.receiveAttack(3,4)

    expect(gameboard.isAllSunk()).toBe(true)
})