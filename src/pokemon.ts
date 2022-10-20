export abstract class Pokemon {
    private _live: number;

    public get live(): number {
        return this._live;
    }

    private _attack: number;

    public get attack(): number {
        return this._attack;
    }

    constructor(live: number, attack: number) {
        if (!live) {
            throw new Error('live must grater than zero');
        }

        if (!attack) {
            throw new Error('attack must grater than zero');
        }

        this._live = live;
        this._attack = attack;
    }

    abstract attackPokemon(other: Pokemon): void;
}