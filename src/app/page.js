import PlayerCard from "../components/PlayerCard";
import playersData from "../../data/player_stats_data.json";
import Filter from "@/components/Filter";
import PlayerTable from "@/components/PlayerTable";

export default function Home() {
  const selectedPlayers = ["A Ashish Reddy", "A Badoni"];
  // const testPlayer = "A Ashish Reddy";
  // console.log(playersData[testPlayer]);
  return (
    <main>
      {/* <Filter />
      <div className="flex flex-col gap-10">
        {selectedPlayers.map((playerName) => (
          <PlayerCard
            key={playerName}
            playerStats={playersData[playerName]}
            playerName={playerName}
          />
        ))}
      </div> */}
      <PlayerTable
        playerStats={playersData["A Ashish Reddy"]}
        playerName={"A Ashish Reddy"}
      />
    </main>
  );
}
