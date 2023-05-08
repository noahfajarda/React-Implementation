import { useState, useCallback } from "react";

// when defining a function in a component, a new function object is created with each rereder

// so you can memoize the function (have it only render once and remember)

// handle unnecessary rerenders of children,
// use same reference of function object

export default function UseCallback() {
  const [count, setCount] = useState(60);

  const showCount = useCallback(() => {
    alert(`Count ${count}`);
  }, [count]);

  return (
    <div>
      <h1>UseCallback</h1>
    </div>
  );
}
