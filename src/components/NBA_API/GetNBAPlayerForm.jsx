import { useState } from "react";

import { searchNBAPlayers } from "./Utils/NBAAPIDataRetrieval";

const handleFormSubmit = async (player, setPlayerData, setPlayer) => {
  // get NBA data
  const data = await searchNBAPlayers(player, "1", "100");
  // see all the data you have access to
  console.log(data.data.data);
  setPlayerData(data.data.data);
  setPlayer("");
};

export default function GetNBAPlayerForm({ setPlayerData }) {
  const [player, setPlayer] = useState("Curry");

  return (
    <div className="flex flex-col">
      {/* text input */}
      <input
        className="m-4"
        type="text"
        name="player"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
      />
      {/* submit button */}
      <button
        className="rounded-full bg-emerald-600 m-4 hover:bg-emerald-700"
        type="submit"
        onClick={() => handleFormSubmit(player, setPlayerData, setPlayer)}
      >
        Search NBA Player
      </button>
      {/* clear button */}
      <button
        className="rounded-full bg-emerald-600 m-4 hover:bg-emerald-700"
        onClick={() => setPlayerData("")}
      >
        Clear
      </button>
    </div>
  );
}
