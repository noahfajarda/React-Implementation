import React from "react";
// 'useSnapshot' to access proxies
import { useSnapshot } from "valtio";
// retrieve initiated proxies
import { search, pokemon } from "./DataStore";
import Accordion from "../Zustand/DataAccordion";

// uni-directional state manager = data flow ONLY goes one way, must reach all aspects

// bi-directional state manager = directly set value & have it update right away
// VALTIO IS BI-DIRECTIONAL

// Valtio installation:
// npm i valtio
// import { proxy } from "valtio";

export default function Valtio() {
  // snapshot for 'allPokemon'
  const snap = useSnapshot(pokemon);

  return (
    <div className="m-5">
      <h1>Valtio</h1>
      <SearchBox />
      <Accordion title="Pokemon Data" pokemon={snap.list} />
    </div>
  );
}

function SearchBox() {
  // snapshot for 'allPokemon
  const snap = useSnapshot(search);

  {
    /* input component */
  }
  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      // state
      value={snap.query}
      onChange={(e) => {
        // change function
        search.query = e.target.value;
      }}
    />
  );
}
