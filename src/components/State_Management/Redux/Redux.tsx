import React, { useMemo } from "react";
// imports from 'react-redux'
import { useSelector, useDispatch, Provider } from "react-redux";
// bring in the defined 'store'
import {
  store,
  selectSearch,
  setSearch,
  usePokemonQuery,
  selectPokemon,
} from "./DataStore";
import DataAccordion from "./DataAccordion";

function SearchBox() {
  const search = useSelector(selectSearch);
  // dispatch == brings in value of context
  const dispatch = useDispatch();

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      onChange={(e) => {
        // 'dispatch' the 'setSearch' function
        dispatch(setSearch(e.target.value));
      }}
    />
  );
}

// needed to use "usePokemonQuery" inside the provider
function InnerRedux() {
  // UNCOMMENT THIS ('retrieve search..." to "[data, sear..."") FOR TO GET DATA WITH USEMEMO
  // THEN COMMENT OUT 'filterAndSortPokemon'

  // // retrieve search variable
  // const search = useSelector(selectSearch);

  // // use the defined query
  // const { data } = usePokemonQuery(undefined);
  // const filterAndSortPokemon = useMemo(() => {
  //   // filter and sort data based on search
  //   return (data || [])
  //     .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
  //     .slice(0, 10)
  //     .sort((a, b) => a.name.localeCompare(b.name));
  // }, [data, search]);

  // retrieve data with 'useSelector'
  const filterAndSortPokemon = useSelector(selectPokemon);

  return <DataAccordion title="Pokemon Data" pokemon={filterAndSortPokemon} />;
}

export default function Redux() {
  return (
    // create a 'provider' for the 'store'
    <Provider store={store}>
      <div className="m-5">
        <h1>Redux</h1>
        <SearchBox />
        {/* retrieving data INSIDE provider & displaying it */}
        <InnerRedux />
      </div>
    </Provider>
  );
}
