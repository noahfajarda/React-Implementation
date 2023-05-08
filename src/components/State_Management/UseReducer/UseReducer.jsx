import React, { useReducer } from "react";

// components
import Names from "./Names/Names";
import UserForm from "./UserForm/UserForm";

// manage LARGE OBJECT STATE (i.e. first, last, email)
export default function UseReducer() {
  // useReducer = applies to an array, takes current value,
  // function to apply to the rest of the values
  // then achieves new result

  // PURPOSE: MANAGING MORE COMPLEX STATE (i.e.: object with multiple keys)

  return (
    <div className="m-5">
      <h1>Use Reducer</h1>
      <Names />
      <UserForm />
    </div>
  );
}
