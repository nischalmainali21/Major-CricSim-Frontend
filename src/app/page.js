import PlayerCard from "../components/playerCard";
import playersData from "../../data/player_stats_data.json";

export default function Home() {
  const selectedPlayers = ["A Ashish Reddy", "A Badoni"];
  const testPlayer = "A Ashish Reddy";
  console.log(playersData[testPlayer]);
  return (
    <main>
      {selectedPlayers.map((playerName) => (
        <PlayerCard
          key={playerName}
          playerStats={playersData[playerName]}
          playerName={playerName}
        />
      ))}
    </main>
  );
}
