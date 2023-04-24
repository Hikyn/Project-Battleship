const playerFactory = (name, gameboard, isAi = false) => {
    const makeMove = () => {
        if (isAi === true) {
            // random coordinates
        } else {
            // wait for input
        }
    };
    return { name, gameboard, isAi, makeMove };
};

export { playerFactory };
