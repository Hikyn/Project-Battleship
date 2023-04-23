import { shipFactory } from "../src/shipFactory";
import { test } from '@jest/globals';

test('Ship factory: sunking works (1)', () => {
    let ship = shipFactory(3);
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true);
})

test('Ship factory: sunking works (2)', () => {
    let ship = shipFactory(2);
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true);
})

test('Ship factory: ship is alive (1)', () => {
    let ship = shipFactory(3);
    ship.hit()
    expect(ship.isSunk()).toBe(false);
})

test('Ship factory: ship is alive (2)', () => {
    let ship = shipFactory(3);
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(false);
})