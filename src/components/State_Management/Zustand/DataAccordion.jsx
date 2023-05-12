import React, { useState, useContext } from "react";

import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import { usePokemon } from "./DataStore";

// retrieve 'pokemon' from the 'Zustand' hook
export default function Accordion({ title, pokemon }) {
  const [show, setShow] = useState(false);

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

      <AnimatePresence>
        {/* iterate the 'Zustand' created pokemon */}
        {show && pokemon?.length != 0 ? (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-cyan-900 grid grid-cols-1 gap-6 sm:grid-col-2 lg:grid-cols-3 mt-3"
          >
            {pokemon?.map((p) => (
              <div key={p.id}>
                <img
                  className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                  alt=""
                />
                <p className="pt-3 text-sm md:text-base">{p.name}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}
