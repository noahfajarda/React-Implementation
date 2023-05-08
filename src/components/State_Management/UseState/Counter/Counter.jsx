import React, { useState } from "react";

export default function Counter() {
  // create a state variable/function
  const [count, setCount] = useState(10);

  // onclick, the count will increase with setCount()
  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}
