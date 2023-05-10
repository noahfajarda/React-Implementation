// import 'useQuery' from 'tanStack'
import { useQuery } from "@tanstack/react-query";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";

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

function usePokemonSource(): {
  pokemon: Pokemon[];
  search: string;
  setSearch: (search: string) => void;
} {
  // remove pokemon state & set & use 'USEQUERY'
  // also set return to data type = "Pokemon[]"
  const { data: pokemon } = useQuery<Pokemon[]>(
    // set query identifier
    ["pokemon"],
    // give a function to fetch data
    () => fetch("/pokemonData.json").then((res) => res.json()),
    {
      // set default data for when data hasn't been fetched yet
      initialData: [],
    }
  );
  type PokemonState = {
    search: string;
  };
  type PokemonAction = { type: "setSearch"; payload: string };

  const [{ search }, dispatch] = useReducer(
    (state: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      search: "",
    }
  );

  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const filteredPokemon = useMemo(
    () =>
      pokemon.filter((p) => p.name.toLowerCase().includes(search)).slice(0, 20),
    [pokemon, search]
  );

  const sortedPokemon = useMemo(
    () => [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)),
    [filteredPokemon]
  );

  return { pokemon: sortedPokemon, search, setSearch };
}

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}
