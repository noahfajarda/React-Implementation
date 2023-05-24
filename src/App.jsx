import { Suspense } from "react";
import "./App.css";
// important routing imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Default from "./pages/Default";
import Hooks from "./pages/Hooks";
import Weather from "./pages/Weather";
import NBA_API from "./pages/NBA_API";
import State_Management from "./pages/State_Management";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Suspense = wait till all pieces of individual data is fetched, then load page */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/nba-api" element={<NBA_API />} />
            <Route path="/state-management" element={<State_Management />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
