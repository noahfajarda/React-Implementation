import React from "react";
import { useAtom, useAtomValue } from "jotai";
// retrieve atoms to get/set data
import { searchAtom, sortedPokemonAtom } from "./DataStore";
import DataAccordion from "./DataAccordion";

// atomic state management

// JOTAI BENEFIT!: DOESN'T HAVE TO RELY ON DEPENDANCY ARRAYS!!
// REMOVES POTENTIAL FOR ERROR!!

// jotai installation
// npm i jotai
// npm i jotai-tanstack-query @tanstack/query-core

export default function Jotai() {
  // retrieve 'all pokemon' data from atom
  const pokemon = useAtomValue(sortedPokemonAtom);

  return (
    <div className="m-5">
      <h1>Jotai</h1>
      <SearchBox />
      <DataAccordion title="Pokemon Data" pokemon={pokemon} />
    </div>
  );
}

function SearchBox() {
  // get 'search' states with 'useAtom'
  const [search, setSearch] = useAtom(searchAtom);

  return (
    <input
      // input component
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      // state
      value={search}
      onChange={(e) => {
        e.preventDefault();
        setSearch(e.target.value);
      }}
    />
  );
}
