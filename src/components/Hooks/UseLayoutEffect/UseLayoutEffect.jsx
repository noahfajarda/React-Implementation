import { useLayoutEffect, useRef } from "react";

// useLayoutEffect == callback function will run after rendering component
// BUT BEFORE updates are painted to the screen

// purpose: retrieve a value BEFORE updates occur in UI

export default function UseLayoutEffect() {
  const myBtn = useRef(null);

  useLayoutEffect(() => {
    const rect = myBtn.current.getBoundingClientRect();
    console.log(rect);
  });

  return (
    <div>
      <h1>UseLayoutEffect</h1>
      <button ref={myBtn}></button>
    </div>
  );
}
