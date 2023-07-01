import React from "react";
import HOCMain from "../components/HOC-Higher-Order-Components/HOCMain";

// navbar
import Navbar from "../components/Navbar/Navbar";

export default function HOC() {
  return (
    // column & space between items
    <div className="flex flex-col space-y-7">
      <Navbar />
      <HOCMain />
    </div>
  );
}
