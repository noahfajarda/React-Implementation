import { useState, useEffect, useDebugValue } from "react";

// integrate a reusable function to use multiple hooks
function useDisplayName() {
  // create a state variable "displayName"
  const [displayName, setDisplayName] = useState();
  // create a useEffect
  useEffect(() => {
    // const data = fetchFromDatabase(props.userId);
    // setDisplayName(data.displayName);
    console.log("test");
  }, []);

  useDebugValue(displayName ?? "loading...");

  return displayName;
}

export default function UseDebugValue() {
  // this will show 'display name' as a label in the component tree in
  // read developer tools
  const displayName = useDisplayName();

  return (
    <div>
      <h1>UseDebugValue</h1>
    </div>
  );
}
