// import { Player } from "./entities/player.entity.js";

import { windPokemon } from "./wind-pokemon.js";
import { waterPokemon } from "./water-pokemon.js";
import { firePokemon } from "./fire-pokemon.js";
import { EarthPokemon } from "./earth-pokemon.js";
import { Pokemon } from "./pokemon.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  const pokemons: Pokemon[] = [];

  //create one of each kind 

  const earthPok1 = new EarthPokemon(100, 12);
  const earthPok2 = new EarthPokemon(100, 20);

  const firePok3 = new firePokemon(100,30);
  const firePok4 = new firePokemon(100,15);

  const waterPok4 =  new waterPokemon(100,21);
  const waterPok5 =  new waterPokemon(150,11);


  const windPok6 = new windPokemon(100,18);
  const windPok7 = new windPokemon(100,22);

  
  console.log(earthPok2);
  firePok3.attackPokemon(earthPok2);
  console.log(earthPok2);


  console.log(windPok6);
  waterPok4.attackPokemon(windPok6);
  console.log(windPok6);


  //put it into array 

  // select two of them via html 

  // combat


});

