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
  // will return an ARRAY of pokemon & the search term
  pokemon: Pokemon[];
  search: string;
  setSearch: (search: string) => void;
} {
  // initialize pokemon state and action
  type PokemonState = {
    pokemon: Pokemon[];
    search: string;
  };
  type PokemonAction =
    | { type: "setPokemon"; payload: Pokemon[] }
    | { type: "setSearch"; payload: string };

  // manage complex state with useReducer
  const [{ pokemon, search }, dispatch] = useReducer(
    (state: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        // if 'action.type' in 'PokemonAction' is "setPokemon",
        // return the current state of search term & payload from current state
        case "setPokemon":
          return { ...state, pokemon: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      pokemon: [],
      search: "",
    }
  );

  useEffect(() => {
    fetch("/pokemonData.json")
      .then((res) => res.json())
      .then((data) => {
        // set 'pokemon' to the data, but with useReducer's dispatch
        dispatch({
          type: "setPokemon",
          payload: data,
        });
      });
  }, []);

  // setSearch too with useReducer's dispatch
  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  // useMemo == use a function on every element in an array
  const filteredPokemon = useMemo(
    () =>
      // limit search to 20 results
      pokemon.filter((p) => p.name.toLowerCase().includes(search)).slice(0, 20),
    [pokemon, search]
  );

  // sort 'filteredPokemon'
  const sortedPokemon = useMemo(
    () => [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)),
    [filteredPokemon]
  );

  // return the 'sortedPokemon' array,
  // the search term,
  //  & the setSearch function
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
