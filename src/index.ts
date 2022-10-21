// import { Player } from "./entities/player.entity.js";

import { EarthPokemon } from "./earth-pokemon.js";
import { Pokemon } from "./pokemon.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  const pokemons: Pokemon[] = [];

  //create one of each kind 

  const earthPok1 = new EarthPokemon(100, 12);
  const earthPok2 = new EarthPokemon(100, 20);



  console.log(earthPok2);
  earthPok1.attackPokemon(earthPok2);
  console.log(earthPok2);

  // earthPok2.attackPokemon(earthPok1);


  //put it into array 

  // select two of them via html 

  // combat


});

