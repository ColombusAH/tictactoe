import { Pokemon } from "./pokemon.js";

export class EarthPokemon extends Pokemon {

    attackPokemon(other: Pokemon): void {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;

    }

}