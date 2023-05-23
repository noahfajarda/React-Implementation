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
    <div>
      Valtio test
      <SearchBox />
      <Accordion title="Pokemon Data" pokemon={snap.list} />
    </div>
  );
}

function SearchBox() {
  // snapshot for 'allPokemon
  const snap = useSnapshot(search);

  return (
    <div>
      {/* input component */}
      <input
        placeholder="Search"
        // state
        value={snap.query}
        onChange={(e) => {
          // change function
          search.query = e.target.value;
        }}
      />
    </div>
  );
}
