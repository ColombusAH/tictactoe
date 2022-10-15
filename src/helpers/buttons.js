export const resetButtons = (buttons) => {
    buttons.forEach((button) => {
        button.innerHTML = "&nbsp;";
    });
    document.querySelector('.section-game_result').innerHTML = '';
};
export const isAllButtonsOccupied = (buttons) => {
    const btns = genterateButtons(buttons);
    const whiteSpace = btns.find(b => b.btnVal === '&nbsp;');
    return whiteSpace === undefined;
};
export const isThereAWinner = (buttons, players) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const btns = genterateButtons(buttons);
    let btn1;
    let btn2;
    let btn3;
    let btn4;
    let btn5;
    let btn6;
    let btn7;
    let btn8;
    let btn9;
    [
        btn1, btn2, btn3,
        btn4, btn5, btn6,
        btn7, btn8, btn9
    ] = btns;
    if (btn1.btnVal === btn2.btnVal && btn1.btnVal === btn3.btnVal) {
        return (_a = players.find(p => p.sign === (btn1 === null || btn1 === void 0 ? void 0 : btn1.btnVal))) === null || _a === void 0 ? void 0 : _a.name;
    }
    if (btn1.btnVal === btn4.btnVal && btn1.btnVal === btn7.btnVal) {
        return (_b = players.find(p => p.sign === (btn1 === null || btn1 === void 0 ? void 0 : btn1.btnVal))) === null || _b === void 0 ? void 0 : _b.name;
    }
    if (btn1.btnVal === btn5.btnVal && btn1.btnVal === btn9.btnVal) {
        return (_c = players.find(p => p.sign === (btn1 === null || btn1 === void 0 ? void 0 : btn1.btnVal))) === null || _c === void 0 ? void 0 : _c.name;
    }
    if (btn3.btnVal === btn6.btnVal && btn3.btnVal === btn9.btnVal) {
        return (_d = players.find(p => p.sign === (btn3 === null || btn3 === void 0 ? void 0 : btn3.btnVal))) === null || _d === void 0 ? void 0 : _d.name;
    }
    if (btn3.btnVal === btn5.btnVal && btn3.btnVal === btn7.btnVal) {
        return (_e = players.find(p => p.sign === (btn3 === null || btn3 === void 0 ? void 0 : btn3.btnVal))) === null || _e === void 0 ? void 0 : _e.name;
    }
    if (btn9.btnVal === btn8.btnVal && btn9.btnVal === btn7.btnVal) {
        return (_f = players.find(p => p.sign === (btn9 === null || btn9 === void 0 ? void 0 : btn9.btnVal))) === null || _f === void 0 ? void 0 : _f.name;
    }
    if (btn4.btnVal === btn5.btnVal && btn4.btnVal === btn6.btnVal) {
        return (_g = players.find(p => p.sign === (btn4 === null || btn4 === void 0 ? void 0 : btn4.btnVal))) === null || _g === void 0 ? void 0 : _g.name;
    }
    if (btn2.btnVal === btn5.btnVal && btn2.btnVal === btn8.btnVal) {
        return (_h = players.find(p => p.sign === (btn2 === null || btn2 === void 0 ? void 0 : btn2.btnVal))) === null || _h === void 0 ? void 0 : _h.name;
    }
};
const genterateButtons = (buttons) => {
    const btns = [];
    buttons.forEach(b => {
        btns.push({
            btnIdx: b.id,
            btnVal: b.innerHTML
        });
    });
    return btns;
};
