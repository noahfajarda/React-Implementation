import { useState } from "react";

// components
import DisplayNBAPlayerData from "../components/NBA_API/DisplayNBAPlayerData";
import GetNBAPlayerForm from "../components/NBA_API/GetNBAPlayerForm";
import Navbar from "../components/Navbar/Navbar";

export default function NBA_API() {
  const [playerData, setPlayerData] = useState([]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <GetNBAPlayerForm setPlayerData={setPlayerData} />

      <div>
        {/* check if there is anything in the 'playerData' array */}
        {playerData.length == 0 ? (
          <div>Search for an NBA Player!</div>
        ) : (
          <DisplayNBAPlayerData playerData={playerData} />
        )}
      </div>
    </div>
  );
}
