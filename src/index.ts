// import { Player } from "./entities/player.entity.js";

import {
  Pokemon,
  EarthPokemon,
  WaterPokemon,
  FirePokemon,
  WindPokemon,
} from "./models";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  const p1Pokemons: Pokemon[] = [
    new EarthPokemon(100, 12, "Bayleef"),
    new WaterPokemon(100, 20, "Alomomola"),
    new FirePokemon(100, 10, "Arcanine"),
    new WindPokemon(100, 15, "Lugia"),
  ];

  const p2Pokemons: Pokemon[] = [
    new EarthPokemon(100, 20, "Lurantis"),
    new WaterPokemon(100, 15, "Lumineon"),
    new FirePokemon(100, 12, "Magby"),
    new WindPokemon(100, 10, "Murkrow"),
  ];

  //create one of each kind
  const [Bayleef, Alomomola, Arcanine, Lugia] = p1Pokemons;
  const [Lurantis, Lumineon, Magby, Murkrow] = p2Pokemons;

  // select two of them via html

  // combat
  console.log(Alomomola);
  Lurantis.attackPokemon(Alomomola);
  console.log(Alomomola);

  Lumineon.attackPokemon(Bayleef);
});
