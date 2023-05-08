import React from "react";
import DataAccordion from "./DataAccordion";

import { PokemonProvider, usePokemon } from "./DataStore";

function SearchBox() {
  // retrieve the search & the setSearch function from the custom hook
  const { search, setSearch } = usePokemon();
  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm"
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default function CustomHooks_and_Context_Modularized() {
  return (
    <React.Fragment>
      <h1>Search & UseContext</h1>
      <PokemonProvider>
        {/* add a component to search */}
        <SearchBox />
        <DataAccordion title="Pokemon Data" />
      </PokemonProvider>
    </React.Fragment>
  );
}
