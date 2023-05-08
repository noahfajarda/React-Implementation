import React, { useState, useContext } from "react";

import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import { PokemonContext } from "./ContextHook";

// create CUSTOM HOOK
// define usePokemon to clean up
function usePokemon() {
  // useContext test === ACCESS variables from HOC with context
  return useContext(PokemonContext);
}

export default function Accordion({ title }) {
  const [show, setShow] = useState(false);

  // retrieve data through custom hook that uses 'useContext'
  const dataCtx = usePokemon();

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <div className="cursor-pointer bg-fuchsia-900" onClick={handleClick}>
        <div className="text-2xl">{title}</div>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      {/* data.pokemon = array of pokemon */}
      <AnimatePresence>
        {show && dataCtx?.pokemon.length != 0 ? (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-cyan-900"
          >
            {/* create a pokemon list that shows pokemon */}
            {/* iterate through each object in array */}
            {dataCtx.pokemon.map((p) => (
              <div key={p.id}>
                <p className="pt-3 text-sm md:text-base">{p.name}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <div></div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}
