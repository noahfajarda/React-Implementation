import { useState, useEffect } from "react";

// useEffect == takes in a function that will run
// will run AFTER updating the DOM
// (i.e.: run when STATES are INITIALIZED and UPDATED)

// useEffect DEPENDENCIES:
// [] == will only run ONCE, (no dependencies)
// [var] == will run after state of 'var' is changed

// using RETURN on useEffect:
// will only run after component is destroyed

// component lifecycle:
// 1. Mounted == initialize component
// 2. Updated == update component
// 3. Unmounted == destroy component
export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [statement, setStatement] = useState("");

  const handleButtonClick = () => {
    setStatement((prev) => prev + "No ");
  };

  useEffect(() => {
    setCount((prev) => prev + 1);
    // will only run when 'statement' is
    // INITIALIZED or CHANGED
  }, [statement]);

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={handleButtonClick}>Click Me!!</button>
      <h3>{statement}</h3>
      <h3>Use Effect ran: {count} times</h3>
      <p>first one's from the 'React.strictMode'</p>
    </div>
  );
}
