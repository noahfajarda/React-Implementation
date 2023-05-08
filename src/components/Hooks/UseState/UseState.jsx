import { useState } from "react";

// useState == handle reactive data
// when data changes, UI should be re-rendered
export default function UseState() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    console.log("COUNT BEFORE:", count);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>UseState</h1>
      <button onClick={handleButtonClick}>{count}</button>
    </div>
  );
}
