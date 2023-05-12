import { create } from "zustand";

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

// search and sort function
const searchAndSortPokemon = (pokemon: Pokemon[], search: string) =>
  pokemon
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    // get first 10 results
    .slice(0, 10)
    .sort((a, b) => a.name.localeCompare(b.name));

// ZUSTAND PURPOSE: external state manager that can talk OUTSIDE of
// react component context
// helps create custom hook that integrates well with react

// create 'usePokemon' store containing
// all variables and functions previously
export const usePokemon = create<{
  pokemon: Pokemon[];
  allPokemon: Pokemon[];
  setAllPokemon: (pokemon: Pokemon[]) => void;
  search: string;
  setSearch: (search: string) => void;
  // pass in 'set' & 'get' params from 'Zustand' for GENERAL FUNCTIONS ('get' is for getting variable created inside itself)
}>((set, get) => ({
  // initialize all variables/setter functions
  pokemon: [],
  allPokemon: [],
  setAllPokemon: (pokemon) =>
    set({
      allPokemon: pokemon,
      // set pokemon to a filtered pokemon search
      pokemon: searchAndSortPokemon(pokemon, get().search),
    }),
  search: "",
  setSearch: (search) =>
    // set pokemon to a filtered pokemon search
    set({ search, pokemon: searchAndSortPokemon(get().allPokemon, search) }),
}));

fetch("/pokemonData.json")
  .then((res) => res.json())
  .then((pokemon) => {
    // use setAllPokemon to the hook by RETRIEVING STATE from 'usePokemon'
    usePokemon.getState().setAllPokemon(pokemon);
  });
