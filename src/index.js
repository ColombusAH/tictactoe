// import { Player } from "./entities/player.entity.js";
import { EarthPokemon } from "./earth-pokemon.js";
import { FirePokemon } from "./fire-pokemon.js";
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    const pokemons = [];
    //create one of each kind 
    const earthPok1 = new EarthPokemon(100, 12);
    const earthPok2 = new EarthPokemon(100, 20);
    const firePok = new FirePokemon(100, 30);
    pokemons.push(earthPok1, earthPok2, firePok);
    firePok.attackPokemon(earthPok2);
    earthPok1.attackPokemon(earthPok2);
    // console.log(earthPok2);
    // earthPok2.attackPokemon(earthPok1);
    //put it into array 
    // select two of them via html 
    // combat
});
