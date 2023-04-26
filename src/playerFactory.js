const playerFactory = (name, gameboard, gameboardElement, isAi = false) => {
    const makeMove = (enemyPlayer) => {
        const randomX = Math.floor(Math.random() * gameboard.length);
        const randomY = Math.floor(Math.random() * gameboard.length);
        try {
            enemyPlayer.gameboard.receiveAttack(randomX, randomY);
        } catch (error) {
            makeMove(enemyPlayer);
        }
    };

    const isLost = () => gameboard.isAllSunk();
    return { name, gameboard, isAi, makeMove, isLost, gameboardElement };
};

export { playerFactory };
