// import query functions from redux for API
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import redux tools
import {
  createSlice,
  configureStore,
  type PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";

// REDUX
// -- have all the data in a store, but slice the data to simiplify it
// -- then, you can manage the simplified data

// REDUX INSTALLATION
// npm i redux react-redux @reduxjs/toolkit

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

// CREATE API
// CREATE API
// CREATE API

// invoke 'createApi' to make an object
const pokemonApi = createApi({
  // go to the path & declare a base path
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),

  // declare any endpoint to retrieve data, (replacement for 'reducers')
  endpoints: (builder) => ({
    // so "getPokemon" will mimic a fetch call to "pokemon.json"
    getPokemon: builder.query<Pokemon[], undefined>({
      query: () => "pokemonData.json",
    }),
  }),
});

// create a simple variable to use the 'query' defined in 'createApi'
export const usePokemonQuery = pokemonApi.endpoints.getPokemon.useQuery;

// SLICE
// SLICE
// SLICE

// create slice
const searchSlice = createSlice({
  // slice 'name' & 'initial value/state'
  name: "search",
  initialState: {
    search: "",
  },
  // reducers = set of functions/actions to change state
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      // set the values of the state
      state.search = action.payload;
    },
  },
});

// export a 'reducer/action' from the slice
export const { setSearch } = searchSlice.actions;

// configure a 'store' with the 'reducer' in it
export const store = configureStore({
  reducer: {
    // give it the defined reducer
    search: searchSlice.reducer,
    pokemonApi: pokemonApi.reducer,
  },
  // api middleware for caching & invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// root state == type of 'getState' value
export type RootState = ReturnType<typeof store.getState>;

// selector == retrieve JUST the data you want
export const selectSearch = (state: RootState) => state.search.search;

// create selector
export const selectPokemon = createSelector(
  // root functionality == retrieve ALL unfiltered data
  (state: RootState) =>
    pokemonApi.endpoints.getPokemon.select(undefined)(state)?.data,
  (state: RootState) => state.search.search,
  // filter retrieved data by search
  (pokemon, search) =>
    (pokemon || [])
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 10)
      .sort((a, b) => a.name.localeCompare(b.name))
);

// start fetch externally, create selector that waits when data is done then takes the data

// initiate fetch query endpoint (with 'undefined') with store
store.dispatch(pokemonApi.endpoints.getPokemon.initiate(undefined));
