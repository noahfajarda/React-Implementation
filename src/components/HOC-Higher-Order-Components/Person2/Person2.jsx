import React, { useState } from "react";
import UpdatedComponent from "../HOCComp/HOCComp";

function Person2({ money, handleIncrease }) {
  return (
    <div>
      <h2>John is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default UpdatedComponent(Person2);
