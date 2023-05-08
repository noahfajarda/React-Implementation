import { useReducer } from "react";

export default function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );

  return (
    <div className="flex flex-col items-center">
      First
      <input
        className="w-40"
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      Last
      <input
        className="w-40"
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>First: {state.first}</div>
      <div>Last: {state.last}</div>
    </div>
  );
}
