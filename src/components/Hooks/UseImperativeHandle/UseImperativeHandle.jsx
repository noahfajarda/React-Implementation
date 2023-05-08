import { forwardRef, useImperativeHandle, useRef } from "react";

// helps if you want to change the behavior of the exposed ref

export default function UseImperativeHandle(props, ref) {
  const myBtn = useRef(null);

  // change behavior of exposed ref
  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("clicking button!");
      myBtn.current.click();
    },
  }));

  return (
    <div>
      <h1>UseImperativeHandle</h1>
      <button ref={myBtn}>test</button>
    </div>
  );
}

// make the ref available when someone uses the component
UseImperativeHandle = forwardRef(UseImperativeHandle);
