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
import ReactQuery from "../components/State_Management/ReactQuery/ReactQuery";
import Reactlocation from "../components/State_Management/ReactLocation/ReactLocation";
import Zustand from "../components/State_Management/Zustand/Zustand";

export default function State_Management() {
  const [pageNum, setPageNum] = useState(1);

  const handlePagePrev = () => {
    if (pageNum === 2) {
      setPageNum(1);
    } else if (pageNum === 3) {
      setPageNum(2);
    } else if (pageNum === 4) {
      setPageNum(3);
    }
  };

  const handlePageNext = () => {
    if (pageNum === 1) {
      setPageNum(2);
    } else if (pageNum === 2) {
      setPageNum(3);
    } else if (pageNum === 3) {
      setPageNum(4);
    }
  };

  const hookDict = {
    1: (
      <section>
        <UseState />
        <UseReducer />
        <UseMemo />
      </section>
    ),
    2: (
      <section>
        <UseCallback />
        <UseEffect />
        <UseRef />
      </section>
    ),
    3: (
      <section>
        <Context />
        <ReactQuery />
        <Reactlocation />
      </section>
    ),
    4: (
      <section>
        <Zustand />
      </section>
    ),
  };

  return (
    <div>
      <Navbar />
      <h1>State Management</h1>
      {pageNum > 1 ? (
        <button onClick={handlePagePrev}>Prev</button>
      ) : (
        <div></div>
      )}
      {pageNum < 4 ? (
        <button onClick={handlePageNext}>Next</button>
      ) : (
        <div></div>
      )}
      {/* render different sections */}
      {hookDict[pageNum]}
    </div>
  );
}
