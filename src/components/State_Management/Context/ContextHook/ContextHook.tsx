import React, { useState, useEffect, createContext, useContext } from "react";
import DataAccordion from "./DataAccordion";

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
export const PokemonContext = createContext<
  ReturnType<typeof usePokemonSource>
>({} as unknown as ReturnType<typeof usePokemonSource>);
//
//

export default function ContextHook() {
  // call the CUSTOM HOOK to retrieve data
  const { pokemon } = usePokemonSource();

  return (
    <React.Fragment>
      <h1>UseContext</h1>
      {/* wrap in context provider with a value (data being passed) */}
      {/* so using useContext with the context defined will give THIS value */}
      <PokemonContext.Provider value={usePokemonSource()}>
        {pokemon.length != 0 ? (
          <DataAccordion title="Pokemon Data" />
        ) : (
          <div>loading...</div>
        )}
      </PokemonContext.Provider>
    </React.Fragment>
  );
}
