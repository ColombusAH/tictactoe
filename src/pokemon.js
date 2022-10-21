export class Pokemon {
    constructor(live, attack) {
        if (!live) {
            throw new Error('live must grater than zero');
        }
        if (!attack) {
            throw new Error('attack must grater than zero');
        }
        this._live = live;
        this._attack = attack;
    }
    get live() {
        return this._live;
    }
    set live(value) {
        value = value > -1 ? value : 0;
        this._live = value;
    }
    get attack() {
        return this._attack;
    }
}
