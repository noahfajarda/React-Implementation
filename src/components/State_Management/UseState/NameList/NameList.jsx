import { useState } from "react";

export default function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("");

  // use state can take in a function
  // USEFUL if you need to make a complex calculation ONLY WHEN component is first created
  const [functionWithState, setfunctionWithState] = useState(() => "Jack");

  const addName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        // add the name to the list and remove the text from name
        onClick={addName}
      >
        Add Name
      </button>

      <h5>Setting a function with useState</h5>
      <input
        type="text"
        value={functionWithState}
        onChange={() => {
          let x = 1;
        }}
      />
    </div>
  );
}
