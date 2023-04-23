import { shipFactory } from "../src/shipFactory";

const gameboardFactory = (length) => {
    let cells = new Array(length);
    let missedShots = [];
    let accurateShots = [];
    let totalShipsLength = 0;

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
            for (let i = 0; i < shipLength; i++) {
                cells[x][y + i] = ship
            }
            totalShipsLength += shipLength

        } else if (orientation === "horizontal") {
            if ( (x + shipLength) >= length ) {
                throw new Error('Out of bounds: horizontal')
            } 
            for (let i = 0; i < shipLength; i++) {
                cells[x + i][y] = ship
            }
            totalShipsLength += shipLength
        }
    }

    const receiveAttack = (x, y) => {
        console.log(missedShots)
        let hit = [x, y]
        let missedShotsJson = JSON.stringify(missedShots);
        let accurateShotsJson = JSON.stringify(accurateShots);
        if (missedShotsJson.includes(hit) == true || accurateShotsJson.includes(hit) == true) {
            throw new Error('Cant hit same cell twice')
        } else {
            if (cells[x][y] == 0) {
                missedShots.push([x, y])
                
            } else {
                cells[x][y].hit()
                accurateShots.push([x, y])
            }
            
        }
        
    }

    const isAllSunk = () => {
        return accurateShots.length >= totalShipsLength ? true : false;
    }
    return { cells, receiveAttack, isAllSunk, placeShip }
  }
  
  export { gameboardFactory }