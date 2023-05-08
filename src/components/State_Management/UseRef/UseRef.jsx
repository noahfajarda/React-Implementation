import React, { useState, useRef } from "react";

// useRef = associate 'state' with a component
// CHANGING a value of a ref === WON'T RERENDER a component

// TWO ways to use 'useRef'
// 1. AUTOMATICALLY set FOCUS on element
import AutomaticFocus from "./AutomaticFocus/AutomaticFocus";
import Names from "./Names/Names";

export default function UseRef() {
  const inputRef = useRef(null);
  // 'useRef' as an incrementor
  const idRef = useRef(1);
  const [names, setNames] = useState([
    // increment the 'useRef'
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  const onAddName = () => {
    setNames([
      ...names,
      // add the inputted name along with the incrementor as the id
      {
        id: idRef.current++,
        name: inputRef.current.value,
      },
    ]);
    console.log(idRef.current);
    inputRef.current.value = "";
  };

  return (
    <div className="m-5">
      <h1>UseRef</h1>
      <AutomaticFocus inputRef={inputRef} />
      <Names names={names} onAddName={onAddName} />
    </div>
  );
}
