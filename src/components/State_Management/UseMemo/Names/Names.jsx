import React, { useState } from "react";
import { useMemo } from "react";

export default function Names() {
  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  // usecase for USEMEMO:
  // don't have to do an expensive calculation for every single re-render
  // only once

  // DON'T use USEMEMO for:
  // simple calculations (i.e. count1 + count2) using scalar variables

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <div>
      <div>Names: {names.join(", ")}</div>
      <div>sortedNames: {sortedNames.join(", ")}</div>
    </div>
  );
}
