import { useState, useEffect, createContext, useContext } from "react";

// FILE TO RETRIEVE ALL DATA (HOOKS, CONTEXT)

// define INTERFACE to clarify type/structure
interface Pokemon {
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

// data retrieval hooks & context:

// create a CUSTOM HOOK
// returns data as an array of pokemon
function usePokemonSource(): {
  // specify return TYPE
  pokemon: Pokemon[];
} {
  // specify variable TYPE returned '<>'
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  // useEffect to get/set data from fetch
  useEffect(() => {
    fetch("/pokemonData.json")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return { pokemon };
}

// create/initialize CONTEXT to
// start making data accessible W/O prop drilling
const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

// create CUSTOM HOOK
// define usePokemon to clean up
export function usePokemon() {
  // useContext test === ACCESS variables from HOC with context
  return useContext(PokemonContext);
}

// provider component
export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}
