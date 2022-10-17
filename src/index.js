import { isAllButtonsOccupied, isThereAWinner, resetButtons } from "./helpers/buttons.js";
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    const players = [
        {
            name: "misho",
            sign: "X"
        },
        {
            name: "mishA",
            sign: "O"
        }
    ];
    let turn = Math.floor(Math.random() * 10) > 5 ? players[0].name : players[1].name;
    const buttons = document.querySelectorAll('.section-button');
    let gameIsActive = true;
    document.querySelector('.header-player_turn').innerHTML = `Turn for: ${turn}`;
    document.querySelector('.section-button_reset').addEventListener('click', () => {
        resetButtons(buttons);
        gameIsActive = true;
    });
    resetButtons(buttons);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (gameIsActive && button.innerHTML === '&nbsp;') {
                button.innerHTML = players.find(p => p.name === turn).sign;
                if (checkGameState(buttons, players)) {
                    turn = turn === players[0].name ? players[1].name : players[0].name;
                }
                else {
                    gameIsActive = false;
                }
            }
        });
    });
});
const checkGameState = (buttons, players) => {
    const isDraw = isAllButtonsOccupied(buttons);
    if (isDraw) {
        document.querySelector('.section-game_result').innerHTML = 'DRAW';
        return false;
    }
    const winner = isThereAWinner(buttons, players);
    if (winner) {
        document.querySelector('.section-game_result').innerHTML = `The Winner is ${winner}`;
        return false;
    }
    return true;
};
