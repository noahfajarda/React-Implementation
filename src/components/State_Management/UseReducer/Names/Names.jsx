import React, { useReducer } from "react";

export default function Names() {
  // create useReducer variable
  const [state, dispatch] = useReducer(
    // pass in a function w/ state & action parameters
    (state, action) => {
      // add a switch case for different types of actions
      switch (action.type) {
        case "SET_NAME":
          // set state to prev + the payload
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            // manipulate different variables defined in useReducer
            ...state,
            // set names array state to prev + the payload
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      // initialize multiple variables
      // useful for forms
      names: [],
      name: "",
    }
  );

  return (
    <div>
      <div>
        {/* iterate through all names */}
        {/* will include new names added */}
        {state.names.map((name, idx) => (
          <div key={idx}>{name}</div>
        ))}
      </div>
      <input
        type="text"
        // set it to variable in 'state' object
        value={state.name}
        onChange={(e) =>
          // on dispatch you can add any variables you want in an object
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <div>Name = {state.name}</div>
      {/* use dispatch to specify action defined in 'useReducer' function */}
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
}
