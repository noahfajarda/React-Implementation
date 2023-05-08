import React from "react";
import DataAccordion from "./DataAccordion";

// data retrieval hooks & context
import { PokemonProvider } from "./DataStore";

export default function CustomHooks_and_Context_Modularized() {
  return (
    <React.Fragment>
      <h1>UseContext / Custom Hooks</h1>
      {/* created a replacement for the provider */}
      <PokemonProvider>
        <DataAccordion title="Pokemon Data" />
      </PokemonProvider>
    </React.Fragment>
  );
}
