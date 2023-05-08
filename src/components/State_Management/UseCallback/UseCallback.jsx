import React, { useState, useMemo, useCallback } from "react";

// useCallback

// use this hook if the callback (i.e. onClick, onChange) is passed to a nested component
// use this hook when you're using a custom hook

// sort a list of strings using useMemo
function SortedList({ list, sortFunc }) {
  console.log("SortedList render");

  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunc), [list];
  }, [list, sortFunc]);

  return (
    <div>
      <div>{sortedList.join(", ")}</div>
    </div>
  );
}

export default function UseCallback() {
  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  // sort function to compare 2 strings
  // useCallback used to only run a function in useMemo when needed
  const sortFunc = useCallback((a, b) => a.localeCompare(b), []);

  return (
    <div className="m-5">
      <h1>UseCallback</h1>
      <SortedList list={names} sortFunc={sortFunc} />
    </div>
  );
}
