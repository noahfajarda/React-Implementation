import { createContext, useContext } from "react";

const warriors = ["Curry", "Thompson", "Green"];

const WarriorsContext = createContext(warriors);

// nested components

// useContext == share data without passing props
// its like another layer where you only have to pass
// a prop once, and you can access it under any component
// child within the tree layer

export default function UseContext() {
  return (
    <WarriorsContext.Provider value={warriors}>
      <h1>UseContext</h1>
      <InnerComponent1 />
      <InnerComponent2 />
    </WarriorsContext.Provider>
  );
}

function InnerComponent1() {
  const player = useContext(WarriorsContext);

  return (
    <div>
      <div>Accessing variable in component 1: {player[0]}</div>
    </div>
  );
}

function InnerComponent2() {
  return (
    <div>
      <div>test2</div>
    </div>
  );
}
