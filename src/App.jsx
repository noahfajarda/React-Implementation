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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/nba-api" element={<NBA_API />} />
          <Route path="/state-management" element={<State_Management />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
