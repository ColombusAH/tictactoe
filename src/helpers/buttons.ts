import { Player } from "../entities/player.entity";
import { GameButton } from "../types/game-button.type";

export const resetButtons = (buttons: NodeListOf<Element>) => {
  buttons.forEach((button) => {
    button.innerHTML = "&nbsp;";
  });
  document.querySelector(".section-game_result")!.innerHTML = "";
};

export const isAllButtonsOccupied = (buttons: NodeListOf<Element>) => {
  const btns: GameButton[] = genterateButtons(buttons);
  const whiteSpace = btns.find((b) => b.btnVal === "&nbsp;");
  return whiteSpace === undefined;
};

export const isThereAWinner = (
  buttons: NodeListOf<Element>,
  players: Player[]
) => {
  const btns: GameButton[] = genterateButtons(buttons);

  let btn1: GameButton;
  let btn2: GameButton;
  let btn3: GameButton;
  let btn4: GameButton;
  let btn5: GameButton;
  let btn6: GameButton;
  let btn7: GameButton;
  let btn8: GameButton;
  let btn9: GameButton;

  [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9] = btns;

  for (let i = 0; i < btns.length / 2; i++) {
    if (btn1.btnVal === btn2.btnVal && btn1.btnVal === btn3.btnVal) {
      return players.find((p) => p.sign === btn1?.btnVal)?.name;
    }
    if (btn1.btnVal === btn4.btnVal && btn1.btnVal === btn7.btnVal) {
      return players.find((p) => p.sign === btn1?.btnVal)?.name;
    }
    if (btn1.btnVal === btn5.btnVal && btn1.btnVal === btn9.btnVal) {
      return players.find((p) => p.sign === btn1?.btnVal)?.name;
    }

    if (btn3.btnVal === btn6.btnVal && btn3.btnVal === btn9.btnVal) {
      return players.find((p) => p.sign === btn3?.btnVal)?.name;
    }
    if (btn3.btnVal === btn5.btnVal && btn3.btnVal === btn7.btnVal) {
      return players.find((p) => p.sign === btn3?.btnVal)?.name;
    }

    if (btn9.btnVal === btn8.btnVal && btn9.btnVal === btn7.btnVal) {
      return players.find((p) => p.sign === btn9?.btnVal)?.name;
    }

    if (btn4.btnVal === btn5.btnVal && btn4.btnVal === btn6.btnVal) {
      return players.find((p) => p.sign === btn4?.btnVal)?.name;
    }

    if (btn2.btnVal === btn5.btnVal && btn2.btnVal === btn8.btnVal) {
      return players.find((p) => p.sign === btn2?.btnVal)?.name;
    }
  }
};

const genterateButtons = (buttons: NodeListOf<Element>) => {
  const btns: GameButton[] = [];

  buttons.forEach((b) => {
    btns.push({
      btnIdx: b.id,
      btnVal: b.innerHTML,
    });
  });

  return btns;
};
