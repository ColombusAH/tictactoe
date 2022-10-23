import { Pokemon } from "./pokemon.js";




export class firePokemon extends Pokemon {
    attackPokemon(other) {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;
    }
}