import { shipFactory } from "../src/shipFactory";
import { test } from '@jest/globals';

test('Ship factory: sunking works', () => {
    let ship = shipFactory(3);
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk).toBe(true);
})