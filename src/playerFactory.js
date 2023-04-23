const playerFactory = (name, gameboard, isStarting, isAi = false) => {
    return { name, gameboard, isStarting, isAi }
}

export { playerFactory }