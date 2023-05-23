// bring in PROXY from valtio
import { proxy } from "valtio";
import { derive } from "valtio/utils";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

// initiate a proxy
export const search = proxy({
  // set query string to empty
  query: "",
});

// initiate 'all pokemon' proxy
export const allPokemon = proxy({
  // set 'pokemon' list to empty array of type: 'Pokemon'
  pokemon: [] as Pokemon[],
});

// AUTOMATICALLY UPDATE MULTIPLE SOURCES OF DATA
export const pokemon = derive({
  list: (get) => {
    // retrieve the user-inputted search query
    const query = get(search).query.toLowerCase();
    // filter for the user-inputted search
    return (
      get(allPokemon)
        .pokemon.filter((p) => p.name.toLowerCase().includes(query))
        // slice & sort for filter
        .slice(0, 10)
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  },
});

// set 'allPokemon' to retrieved data
fetch("/pokemonData.json")
  .then((res) => res.json())
  .then((pokemon) => {
    // JUST SET retrieved data array to 'allPokemon' object
    allPokemon.pokemon = pokemon;
  });
