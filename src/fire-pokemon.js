import { Pokemon } from "./pokemon.js";
export class FirePokemon extends Pokemon {
    attackPokemon(other) {
        console.log('[FirePokemon] attack');
        console.log(this);
        console.log(other);
    }
}
//pokemon (10 attack)
//earth VS earth => 10
// fire VS earth => 13
// fire VS water => 7
