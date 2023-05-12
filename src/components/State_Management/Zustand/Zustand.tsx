import React from "react";
// import 'usePokemon' from 'DataStore.tsx'
import { usePokemon } from "./DataStore";

// components
import DataAccordion from "./DataAccordion";

function SearchBox() {
  // retrieve the searches using 'SELECTORS'
  const search = usePokemon((state) => state.search);
  const setSearch = usePokemon((state) => state.setSearch);

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      // set states/functions
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default function Zustand() {
  // retrieve 'Zustand' state variable
  const pokemon = usePokemon((state) => state.pokemon);

  return (
    <div className="m-5">
      <h1>Zustand</h1>
      <SearchBox />
      <DataAccordion title="Pokemon Data" pokemon={pokemon} />
    </div>
  );
}
