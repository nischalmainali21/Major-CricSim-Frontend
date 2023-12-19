import PlayerCard from "../components/playerCard";
import playersData from "../../data/player_stats_data.json";

export default function Home() {
  const selectedPlayers = ["A Ashish Reddy", "A Badoni"];
  // const testPlayer = "A Ashish Reddy";
  // console.log(playersData[testPlayer]);
  return (
    <main>
      <div className="flex flex-col gap-10">
        {selectedPlayers.map((playerName) => (
          <PlayerCard
            key={playerName}
            playerStats={playersData[playerName]}
            playerName={playerName}
          />
        ))}
      </div>
    </main>
  );
}
