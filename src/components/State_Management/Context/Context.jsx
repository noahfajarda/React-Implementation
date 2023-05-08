import React from "react";

// components
import ContextHook from "./ContextHook/ContextHook";
import CustomHooks_and_Context_Modularized from "./CustomHooks_and_Context_Modularized/CustomHooks_and_Context_Modularized";
import Search from "./Search/Search";

export default function Context() {
  return (
    <div>
      <ContextHook />
      <CustomHooks_and_Context_Modularized />
      <Search />
    </div>
  );
}
