const playerFactory = (name, gameboard, isAi = false) => {
    const makeMove = () => {
        if (isAi === true) {
            // random coordinates
        } else {
            // wait for input
        }
    };

    const isLost = () => gameboard.isAllSunk();
    return { name, gameboard, isAi, makeMove, isLost };
};

export { playerFactory };
