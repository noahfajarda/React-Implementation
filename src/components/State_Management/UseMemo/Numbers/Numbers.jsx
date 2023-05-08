import React from "react";
import { useState, useMemo } from "react";

export default function Numbers() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    // any time the manipulated array changes, this function will run
    [numbers]
  );

  return (
    <div>
      <div>numbers</div>
      <div>Total: {total}</div>
    </div>
  );
}
