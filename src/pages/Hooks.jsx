// tutorial: https://www.youtube.com/watch?v=TNhaISOUy6Q

import UseState from "../components/Hooks/UseState/UseState";
import UseEffect from "../components/Hooks/UseEffect/UseEffect";
import UseContext from "../components/Hooks/UseContext/UseContext";
import UseRef from "../components/Hooks/UseRef/UseRef";
import UseReducer from "../components/Hooks/UseReducer/UseReducer";
import UseMemo from "../components/Hooks/UseMemo/UseMemo";
import UseCallback from "../components/Hooks/UseCallback/UseCallback";
import UseImperativeHandle from "../components/Hooks/UseImperativeHandle/UseImperativeHandle";
import UseLayoutEffect from "../components/Hooks/UseLayoutEffect/UseLayoutEffect";
import UseDebugValue from "../components/Hooks/UseDebugValue/UseDebugValue";

// navbar
import Navbar from "../components/Navbar/Navbar";

// for 'UseImperativeHandle'
import { useRef } from "react";

export default function Hooks() {
  // why hooks are helpful:
  // AVOID COMPLEX TREE OF COMPONENTS
  // PRIMITIVES OF REACT FRAMEWORK (use'SuperPower')
  // ALWAYS CALL AT TOP OF COMPONENTS

  // for 'UseImperativeHandle'
  const ref = useRef(null);

  return (
    // column & space between items
    <div className="flex flex-col space-y-7">
      <Navbar />
      <h2>this is the React hooks page</h2>
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
      <UseReducer />
      <UseMemo />
      <UseCallback />
      <UseImperativeHandle ref={ref} />
      <UseLayoutEffect />
      <UseDebugValue />
    </div>
  );
}
