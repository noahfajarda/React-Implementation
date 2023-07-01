import React, { useState } from "react";
import UpdatedComponent from "../HOCComp/HOCComp";

function Person1({ money, handleIncrease }) {
  return (
    <div>
      <h2>Jimmy is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default UpdatedComponent(Person1);
