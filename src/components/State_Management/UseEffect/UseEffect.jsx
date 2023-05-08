import React, { useEffect, useState } from "react";

// components
import BadExample from "./BadExample/BadExample";

// most complicated hook == may cause infinite callbacks

export default function UseEffect() {
  const [names, setNames] = useState([]);

  // will tell React to ONLY DO THIS THING ONCE!!
  // OR if the DEPENDENCY ARRAY CHANGES
  useEffect(() => {
    // will fetch any data from the 'public' folder
    fetch("/useEffectNames.json")
      .then((res) => res.json())
      .then((data) => {
        setNames(data.data);
      });
  }, []);

  const [selectedName, setSelectedName] = useState("");
  const [selectedNameDetails, setSelectedNameDetails] = useState("");

  // re-fetch data when 'selectedName' changes
  useEffect(() => {
    if (selectedName != "") {
      setSelectedNameDetails(`I got the data for ${selectedName}`);
    }
    // this useEffect only runs when 'selectedName' in the dependency array changes
  }, [selectedName]);

  // alternative way to get the data: do a function ONCLICK
  const onSelectNameChange = (name) => {
    setSelectedNameDetails(`I got the data for ${selectedName}`);
  };

  return (
    <div className="m-5">
      <h1>UseEffect</h1>
      <div>Selected Name: {selectedName}</div>
      <div>
        {names.length != 0 ? (
          <div>
            {names.map((person) => (
              <button key={person} onClick={() => setSelectedName(person)}>
                {person}
              </button>
            ))}
          </div>
        ) : (
          <div>no names</div>
        )}
        <div>Selected Name Details: {selectedNameDetails}</div>
      </div>
      <BadExample />
    </div>
  );
}
