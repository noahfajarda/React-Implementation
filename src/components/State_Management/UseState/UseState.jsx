import React, { useState } from "react";

// components
import Counter from "./Counter/Counter";
import NameList from "./NameList/NameList";

export default function UseState() {
  return (
    <div className="m-5">
      <h1>Use State</h1>
      {/* these individual components have independent states */}
      {/* they aren't related to each other */}
      {/* so you can independently manipulate their states */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <NameList />
    </div>
  );
}
