import { useReducer } from "react";

// similar to set state, but you...

// dispatch actions
// then go to a reducer function
// then it determines how to compute the next state
// have different cases for different scenarios

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  // dispatch == function that dispatches an action
  // 'useReducer' hook takes initial state as second argument
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = (e) => {
    dispatch({ type: e.target.innerText });
    // "decrement" or "increment"
  };

  return (
    <div>
      <h1>UseReducer</h1>
      <h4>Current State: {state}</h4>
      <button onClick={handleClick}>decrement</button>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}
