import { useRef } from "react";

// create a mutable object that keeps the same reference
// between renders

// DOESN'T TRIGGER A RERENDER WHEN VALUE CHANGES!

// useful for getting HTML elements from the DOM

export default function UseContext() {
  const count = useRef(0);

  const myBtn = useRef(null);
  const clickIt = () => myBtn.current.click();

  return (
    <div>
      <h1>UseRef</h1>
      <button onClick={() => count.current++}>{count.current}</button>
      {/* more useful */}
      <button ref={myBtn}>It's a button</button>
    </div>
  );
}
