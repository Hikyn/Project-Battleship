import { shipFactory } from "../src/shipFactory";

const gameboardFactory = (length) => {
    let cells = new Array(length);
    let missed = 0;

    // Create double array
    for (let i = 0; i < length; i++) {
        cells[i] = new Array(length);
    }

    // Populate double array with 0
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            cells[i][j] = 0;
        }
    }

    const placeShip = (x, y, shipLength, orientation) => {
        let ship = shipFactory(shipLength)

        if (orientation === "vertical") {
            if ( (y + shipLength) >= length ) {
                throw new Error('Out of bounds: vertical')
            }
        } else if (orientation === "horizontal") {
            if ( (x + shipLength) >= length ) {
                throw new Error('Out of bounds: horizontal')
            } 
        }
        



        for (let i = 0; i < shipLength; i++) {
            cells[x][y] = ship
        }
        cells[x][y] = ship
        cells[x + 1][y] = ship
    }

    const receiveAttack = () => {
      
    }

    const isAllSunk = () => {

    }
    return { cells, receiveAttack, isAllSunk, placeShip }
  }
  
  export { gameboardFactory }