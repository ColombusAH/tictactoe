import { EarthPokemon } from "./earth-pokemon.js";
import { Pokemon } from "./pokemon.js";
import { WaterPokemon } from "./water-pokemon.js";

export class FirePokemon extends Pokemon {

    attackPokemon(other: Pokemon): void {

        console.log('[FirePokemon] attack');
        console.log(this);
        console.log(other);
        const newOtherLive = other.live - Pokemon.getDamage(this, other);
        other.live = newOtherLive;

        // if (other instanceof FirePokemon) {
        //     const newOtherLive = other.live - this.attack;
        //     other.live = newOtherLive;
        // } else if (other instanceof EarthPokemon) {
        //     const newOtherLive = other.live - (this.attack * 1.3);
        //     other.live = newOtherLive;
        // } else if (other instanceof WaterPokemon) {
        //     const newOtherLive = other.live - (this.attack * 0.7);
        //     other.live = newOtherLive;
        // }

    }

}

//pokemon (10 attack)

//earth VS earth => 10
// fire VS earth => 13
// fire VS water => 7