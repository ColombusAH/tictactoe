import { Pokemon } from "./pokemon.js";



export class windPokemon extends Pokemon {

    attackPokemon(other: Pokemon): void {
        const newOtherLive = other.live - this.attack;
        other.live = newOtherLive;

    }

}