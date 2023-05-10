import React from "react";
import DataAccordion from "./DataAccordion";

import { PokemonProvider, usePokemon } from "./DataStore";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// reactLocation = turn single-page app to multi-page app

// STEPS:
// 1. npm i @tanstack/react-location --save
// 2. import Link, Outlet, ReactLocation, Router, useMatch from "react-location"
import {
  Link,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from "@tanstack/react-location";
// 3. create instance of 'ReactLocation'
const location = new ReactLocation();

function RetrieveId() {
  // 7. retrieve ID parameter from URL with 'useMatch()'
  const {
    params: { id },
  } = useMatch();

  return (
    <div>
      <div>Detail</div>
    </div>
  );
}

// 4. define elements to display based on ROUTES
const routes = [
  {
    path: "/state-management",
    element: (
      <>
        <div>Visit these routes to view the rest from 'ReactLocation'</div>
        <SearchBox />
        <DataAccordion title="Pokemon Data" />
      </>
    ),
  },
  {
    // doesn't work because you already have 'react-router'
    path: "/brooooooo/:id",
    element: (
      <>
        <div>Visit these routes to view the rest from 'ReactLocation'</div>
        <RetrieveId />
      </>
    ),
  },
];

function SearchBox() {
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

export default function Reactlocation() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <h1>ReactLocation</h1>
        <PokemonProvider>
          {/* 5. wrap elements in 'router' element with 'location' & 'routes' */}
          <Router location={location} routes={routes}>
            {/* 6. replace content with 'Outlet' to display 'routes' */}
            <Outlet />
          </Router>
        </PokemonProvider>
      </React.Fragment>
    </QueryClientProvider>
  );
}
