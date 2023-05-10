import React from "react";
import DataAccordion from "./DataAccordion";

import { PokemonProvider, usePokemon } from "./DataStore";

// react query == third party libraries
// part of "TanStack query"

// PURPOSE: easily query and mutate data on server
// let useQuery to MANAGE ALL THE DATA

// STEPS:
// 1. npm i @tanstack/react-query
// 2. build query-client provider & query-client (cache)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 3. create a query-client
const queryClient = new QueryClient();

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

export default function ReactQuery() {
  return (
    // 4. wrap app in 'QueryClientProvider' with client
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <h1>ReactQuery</h1>
        <PokemonProvider>
          <SearchBox />
          <DataAccordion title="Pokemon Data" />
        </PokemonProvider>
      </React.Fragment>
    </QueryClientProvider>
  );
}
