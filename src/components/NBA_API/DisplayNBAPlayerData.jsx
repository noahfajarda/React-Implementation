export default function DisplayNBAPlayerData({ playerData }) {
  return (
    <div>
      <div>
        <table className="flex flex-col items-center justify-center">
          {/* headers */}
          <thead>
            <tr>
              <th>Player</th>
            </tr>
          </thead>
          <tbody>
            {/* data */}
            {playerData.map((player, index) => (
              <tr key={index}>
                <td>
                  <a
                    href={`http://www.google.com/search?q=${player.first_name}+${player.last_name}`}
                    target="_blank"
                  >
                    {player.first_name} {player.last_name}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
