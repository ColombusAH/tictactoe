"use strict";
exports.__esModule = true;
var player_entity_1 = require("./entities/player.entity");
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    var p1 = new player_entity_1.Player('misho', 'X');
    var p2 = new player_entity_1.Player('mishA', 'O');
});
