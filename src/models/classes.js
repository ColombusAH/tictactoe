import { EPokemonElement } from ".";
export class Pokemon {
    constructor(live, attack, element, name) {
        if (!live) {
            throw new Error('live must grater than zero');
        }
        if (!attack) {
            throw new Error('attack must grater than zero');
        }
        this._live = live;
        this._attack = attack;
        this._element = element;
        this._name = name;
    }
    get element() {
        return this._element;
    }
    get name() {
        return this._name;
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
export class EarthPokemon extends Pokemon {
    constructor(live, attack, name) {
        super(live, attack, EPokemonElement.EARTH, name);
    }
    attackPokemon(other) {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}
export class WaterPokemon extends Pokemon {
    constructor(live, attack, name) {
        super(live, attack, EPokemonElement.WATER, name);
    }
    attackPokemon(other) {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}
export class FirePokemon extends Pokemon {
    constructor(live, attack, name) {
        super(live, attack, EPokemonElement.FIRE, name);
    }
    attackPokemon(other) {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}
export class WindPokemon extends Pokemon {
    constructor(live, attack, name) {
        super(live, attack, EPokemonElement.WIND, name);
    }
    attackPokemon(other) {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}
