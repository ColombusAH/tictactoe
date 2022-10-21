import { Pokemon } from "./pokemon.js";
export class EarthPokemon extends Pokemon {
    attackPokemon(other) {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}
