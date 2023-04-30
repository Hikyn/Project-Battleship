const placementScreenFactory = (player) => {
    /**
     * Renders placement screen over anything
     */
    const show = () => {
        const targetParent = player.gameboardElement;

        targetParent.textContent = '';

        const popUpScreen = document.createElement('div');
        popUpScreen.classList.add('pop-Up-Screen');

        const popUpTitle = document.createElement('div');
        popUpTitle.textContent = `Admiral, place your ships!`;
        popUpTitle.classList.add('title');

        const popUpMain = document.createElement('div');
        popUpMain.classList.add('main');

        const popUpGameboard = document.createElement('div');
        popUpGameboard.classList.add('gameboard');

        const popUpAvailableShips = document.createElement('div');
        popUpAvailableShips.classList.add('pop-Up-AvailableShips');

        const randomButton = document.createElement('button');
        randomButton.classList.add('btn-random');
        randomButton.textContent = 'Random';

        const finishButton = document.createElement('button');
        finishButton.classList.add('btn-finish');
        finishButton.classList.add('grayed');
        finishButton.textContent = 'Finish';

        const resetButton = document.createElement('button');
        resetButton.classList.add('btn-reset');
        resetButton.textContent = 'Reset';

        const buttons = document.createElement('div');
        buttons.classList.add('btns');

        buttons.appendChild(randomButton);
        buttons.appendChild(finishButton);
        buttons.appendChild(resetButton);

        popUpMain.appendChild(popUpGameboard);
        popUpMain.appendChild(popUpAvailableShips);

        popUpScreen.appendChild(popUpTitle);
        popUpScreen.appendChild(popUpMain);
        popUpScreen.appendChild(buttons);

        targetParent.appendChild(popUpScreen);
    };

    function onRandomButton(callback) {
        const randomButton = document.querySelector('.btn-random');
        randomButton.addEventListener('click', callback);
    }

    function onFinishButton(callback) {
        const finishButton = document.querySelector('.btn-finish');
        finishButton.addEventListener('click', callback);
    }

    function onResetButton(callback) {
        const resetButton = document.querySelector('.btn-reset');
        resetButton.addEventListener('click', callback);
    }

    const appendGameboard = (renderer) => {
        const popUpGameboard = document.querySelector(
            '.pop-Up-Screen .gameboard'
        );
        renderer.renderGameboard(player, popUpGameboard);
    };

    const appendAvailableShips = (renderer) => {
        const availableShips = document.querySelector('.pop-Up-AvailableShips');
        renderer.renderAvailableShips(player, availableShips)
    };

    return {
        show,
        onRandomButton,
        onFinishButton,
        onResetButton,
        appendGameboard,
        appendAvailableShips
    };
};

export { placementScreenFactory };
