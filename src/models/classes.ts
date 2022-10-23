import { EPokemonElement } from ".";

export abstract class Pokemon {

    private _element: EPokemonElement;
    get element() {
        return this._element;
    }

    private _name: string;
    get name() {
        return this._name;
    }

    private _live: number;
    get live(): number {
        return this._live;
    }
    set live(value: number) {
        value = value > -1 ? value : 0;
        this._live = value;
    }

    private _attack: number;
    get attack(): number {
        return this._attack;
    }

    constructor(live: number, attack: number, element: EPokemonElement, name: string) {
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

    abstract attackPokemon(other: Pokemon): void;
}

export class EarthPokemon extends Pokemon {

    constructor(live: number, attack: number, name: string) {
        super(live, attack, EPokemonElement.EARTH, name);
    }
 
    attackPokemon(other: Pokemon): void {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}

export class WaterPokemon extends Pokemon {

    constructor(live: number, attack: number, name: string) {
        super(live, attack, EPokemonElement.WATER, name);
    }
 
    attackPokemon(other: Pokemon): void {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}

export class FirePokemon extends Pokemon {

    constructor(live: number, attack: number, name: string) {
        super(live, attack, EPokemonElement.FIRE, name);
    }
 
    attackPokemon(other: Pokemon): void {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}

export class WindPokemon extends Pokemon {

    constructor(live: number, attack: number, name: string) {
        super(live, attack, EPokemonElement.WIND, name);
    }
 
    attackPokemon(other: Pokemon): void {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}