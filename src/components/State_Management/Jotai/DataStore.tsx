import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

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

// initiate 'atom' state variable for 'search'
export const searchAtom = atom("");

// initiate 'atom query' state variable to retrieve 'allPokemon'
const [allPokemon] = atomsWithQuery<Pokemon[]>(() => ({
  // declare unique key to access all the retrieved data
  queryKey: ["pokemon"],
  // function to fetch the data
  queryFn: () => fetch("/pokemonData.json").then((res) => res.json()),
}));

// pokemonAtom RELYS ON searchAtom & 'allPokemon' atom
export const pokemonAtom = atom((get) => {
  const search = get(searchAtom).toLowerCase();
  const all = get(allPokemon);

  if (!search) return all;

  return all.filter((p) => p.name.toLowerCase().includes(search));
});

// sortedPokemonAtom RELYS ON pokemonAtom
export const sortedPokemonAtom = atom((get) => {
  const search = get(searchAtom).toLowerCase();
  const pokemon = get(pokemonAtom);

  if (!search) return pokemon;

  return pokemon.slice(0, 10).sort((a, b) => a.name.localeCompare(b.name));
});

// JOTAI BENEFIT!: DOESN'T HAVE TO RELY ON DEPENDANCY ARRAYS!!
// REMOVES POTENTIAL FOR ERROR!!
