import { useState } from "react";

// components
import Navbar from "../components/Navbar/Navbar";
import UseState from "../components/State_Management/UseState/UseState";
import UseReducer from "../components/State_Management/UseReducer/UseReducer";
import UseMemo from "../components/State_Management/UseMemo/UseMemo";
import UseCallback from "../components/State_Management/UseCallback/UseCallback";
import UseEffect from "../components/State_Management/UseEffect/UseEffect";
import UseRef from "../components/State_Management/UseRef/UseRef";
import Context from "../components/State_Management/Context/Context";

export default function State_Management() {
  return (
    <div>
      <Navbar />
      <h1>State Management</h1>
      <UseState />
      <UseReducer />
      <UseMemo />
      <UseCallback />
      <UseEffect />
      <UseRef />
      <Context />
    </div>
  );
}
