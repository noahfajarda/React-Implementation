import React, { useEffect } from "react";

export default function AutomaticFocus({ inputRef }) {
  // get the input in focus initially

  // know that the component has been defined by using useEffect
  useEffect(() => {
    // AUTOMATICALLY set FOCUS on element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>Set focus to element automatically</p>
      {/* uncontroled input */}
      <input type="text" ref={inputRef} />
    </div>
  );
}
