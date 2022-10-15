"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_entity_1 = require("./entities/player.entity");
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    const p1 = new player_entity_1.Player('misho', 'X');
    const p2 = new player_entity_1.Player('mishA', 'O');
});
