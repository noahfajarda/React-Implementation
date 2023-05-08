import React from "react";

export default function Names({ names, onAddName }) {
  return (
    <div>
      <div>names will increment automatically with useRef</div>
      <div>NO REFRESH NEEDED</div>
      <div>
        {names.map((name) => (
          <div key={name.id}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}
