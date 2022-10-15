import { Player } from './entities/player.entity.js';
const init = document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    const p1 = new Player('misho', 'X');
    const p2 = new Player('mishA', 'O');
});
export default init;
